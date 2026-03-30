# 🚀 Fullstack Boilerplate – Next.js + Symfony + Docker

Boilerplate fullstack prête à l’emploi pour projets persos ou POC :

- **Frontend** : Next.js (TypeScript) + shadcn/ui + Tailwind + Playwright
- **Backend** : Symfony (API) + Doctrine + MySQL
- **Infra** : Docker / Docker Compose
- **Tooling** : Makefile (init rapide), phpMyAdmin, Redis & Mailpit (optionnels)

Objectif :  
👉 *cloner le repo, lancer 2 commandes, coder.*

---

## 🧱 Stack technique

### Frontend
- Next.js (App Router)
- TypeScript strict
- Tailwind CSS
- shadcn/ui
- Playwright (E2E)
- ESLint / Prettier / Husky (prévu)

### Backend
- Symfony
- Doctrine ORM + Migrations
- PHPUnit / PHPStan / PHP-CS-Fixer

### Infra
- Docker & Docker Compose
- MySQL 8
- phpMyAdmin
- Redis & Mailpit (via profiles)

---

## 📦 Prérequis

- Docker + Docker Compose
- Make
- Git
- (Recommandé) WSL2 sous Windows

---

## ⚠️ Important : UID / GID (permissions)

Les conteneurs **écrivent dans le repo** (vendor, node_modules, etc.).  
Pour éviter les problèmes de permissions (`EACCES`), les conteneurs tournent avec **ton UID/GID**.

👉 Sur Linux / WSL, l’UID par défaut est souvent **1000**.

Si pas 1000 alors faire les commandes suivantes : 
echo "UID=$(id -u)" >> .env
echo "GID=$(id -g)" >> .env


Pensez aussi à copier le env.exemple : 
cp .env.example .env

---

## 🚀 Démarrage rapide (ordre recommandé – anti-crash)

### 1️⃣ Cloner
```bash
git clone <repo-url> my-project
cd my-project

make env-init
make init
make up
make urls

OU 

make env-init && make init && make up && make urls
