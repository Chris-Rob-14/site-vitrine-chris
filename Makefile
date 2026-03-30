.DEFAULT_GOAL := help
-include .env
export

DC = docker compose
P  = $(DC) exec
BACK = backend
FRONT = frontend

help:
	@echo "make up | down | logs | ps"
	@echo "make init           -> bootstrap backend+frontend + tools"
	@echo "make devtools-up    -> start with devtools profile (redis+mailpit)"
	@echo "make sh-back | sh-front"
	@echo "make db-reset | db-migrate | db-seed"
	@echo "make qa             -> front lint+format+e2e + back cs+stan+tests"

up:
	$(DC) up -d --build

devtools-up:
	$(DC) --profile devtools up -d --build

down:
	$(DC) down

logs:
	$(DC) logs -f --tail=200

ps:
	$(DC) ps

sh-back:
	$(P) $(BACK) sh

sh-front:
	$(P) $(FRONT) sh

# ---- bootstrap ----
init: env-init up symfony-new next-new front-tools back-tools down up

symfony-new:
	@if [ -f backend/composer.json ]; then \
	  echo "Symfony already initialized (backend/composer.json exists)"; \
	else \
	  $(DC) run --rm backend sh -lc "\
	    composer create-project symfony/skeleton . && \
	    composer require symfony/orm-pack doctrine/doctrine-migrations-bundle symfony/serializer-pack symfony/validator symfony/security-bundle && \
	    composer require --dev symfony/maker-bundle symfony/test-pack \
	  "; \
	fi

next-new:
	@if [ -f frontend/package.json ]; then \
	  echo "Next already initialized (frontend/package.json exists)"; \
	else \
	  $(DC) run --rm --no-deps --entrypoint sh frontend_scaffold -lc "\
	    cd /app && \
	    rm -rf ./* ./.??* 2>/dev/null || true && \
	    npx create-next-app@latest . --ts --eslint --tailwind --app --src-dir --import-alias '@/*' --use-npm && \
	    npm i -D prettier prettier-plugin-tailwindcss eslint-config-prettier husky lint-staged @commitlint/cli @commitlint/config-conventional @playwright/test && \
	    npm i next-themes next-pwa lucide-react && \
	    npx shadcn@latest init -y \
	  "; \
	fi


front-tools:
	$(DC) run --rm --no-deps $(FRONT) sh -lc "\
	  cd /app && \
	  node -v && npm -v && \
	  npm i -D husky lint-staged @commitlint/cli @commitlint/config-conventional eslint-config-prettier prettier prettier-plugin-tailwindcss && \
	  npx --yes husky init && \
	  npm pkg set scripts.format='prettier . --write' && \
	  npm pkg set scripts.format:check='prettier . --check' && \
	  npm pkg set scripts.lint='next lint' && \
	  npm pkg set scripts.test:e2e='playwright test' && \
	  npm pkg set scripts.test:e2e:ui='playwright test --ui' && \
	  npm pkg set lint-staged.'**/*.{ts,tsx,js,jsx,json,css,md}'='prettier --write' && \
	  echo 'npx lint-staged' > .husky/pre-commit && chmod +x .husky/pre-commit && \
	  echo 'npx --no -- commitlint --edit $$1' > .husky/commit-msg && chmod +x .husky/commit-msg \
	"

back-tools:
	$(DC) run --rm --no-deps $(BACK) sh -lc "\
	  composer require --dev friendsofphp/php-cs-fixer phpstan/phpstan phpunit/phpunit || true \
	"

db-migrate:
	$(P) $(BACK) sh -lc "php bin/console make:migration && php bin/console doctrine:migrations:migrate -n"

db-reset:
	$(P) $(BACK) sh -lc "php bin/console doctrine:database:drop --force --if-exists && php bin/console doctrine:database:create && php bin/console doctrine:migrations:migrate -n"

db-seed:
	$(P) $(BACK) sh -lc "php bin/console doctrine:fixtures:load -n"

qa:
	$(P) $(FRONT) sh -lc "npm run lint && npm run format:check && npm run test:e2e"
	$(P) $(BACK) sh -lc "php vendor/bin/php-cs-fixer fix --dry-run -v && php vendor/bin/phpstan analyse && php vendor/bin/phpunit"

env-init:
	@echo ">> Initializing .env (if missing) + UID/GID"
	@if [ ! -f .env ]; then \
	  cp .env.example .env; \
	  echo "Created .env from .env.example"; \
	fi
	@grep -q '^UID=' .env || echo "UID=$$(id -u)" >> .env
	@grep -q '^GID=' .env || echo "GID=$$(id -g)" >> .env
	@echo "UID/GID set to: $$(grep -E '^(UID|GID)=' .env | tr '\n' ' ')"
	@echo "Done."

urls: env-init
	@. ./.env; \
	echo "Front:     http://localhost:$${FRONT_PORT:-3000}"; \
	echo "Back:      http://localhost:$${BACK_PORT:-8080}"; \
	echo "phpMyAdmin: http://localhost:$${PMA_PORT:-8081}"; \
	echo "MySQL host: 127.0.0.1:$${MYSQL_PORT:-3314}"

