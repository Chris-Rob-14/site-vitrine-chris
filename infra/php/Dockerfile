FROM php:8.3-cli

RUN apt-get update && apt-get install -y \
  git unzip libzip-dev libicu-dev \
  && docker-php-ext-install intl pdo pdo_mysql zip opcache \
  && rm -rf /var/lib/apt/lists/*

COPY --from=composer:2 /usr/bin/composer /usr/bin/composer
COPY infra/php/php.ini /usr/local/etc/php/conf.d/99-custom.ini

WORKDIR /var/www/html
