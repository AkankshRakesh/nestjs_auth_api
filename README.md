# NestJS JWT Auth API

A clean, modern NestJS 11+ REST API demonstrating JWT authentication, TypeScript strict mode, and best practices for scalable Node.js backend.

---

## Features

🛡️ **JWT Authentication:** Secure login and protected routes using `@nestjs/jwt`  
🔒 **Protected Profile:** `/profile` route requires a valid Bearer token  
🧑 **In-Memory User Store:** No database needed—simple, fast, and easy to test  
📄 **Swagger Docs:** Interactive API docs with JWT support via `@nestjs/swagger`  
🚦 **Status Endpoint:** `/status` public health check  
🧪 **Unit Tested:** Includes Jest test for JWT guard  
🧹 **Strict TypeScript:** Fully typed, idiomatic code  
📝 **ESLint + Prettier:** Consistent code style enforced  
🐳 **Docker-Ready:** Deploy anywhere with Docker & Compose  
📬 **Postman Collection:** Ready-to-use API requests for demo/testing

---

## Tech Stack

- **Framework:** NestJS 11+
- **Language:** TypeScript (strict mode)
- **Auth:** JWT via `@nestjs/jwt`
- **Docs:** Swagger (`@nestjs/swagger`)
- **Testing:** Jest
- **Linting:** ESLint, Prettier
- **Containerization:** Docker, Docker Compose

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

Clone the repository:
```sh
git clone https://github.com/your-username/nestjs-jwt-auth
cd nestjs-jwt-auth
```

Install dependencies:
```sh
npm install
# or
yarn install
```

### Running Locally

Start the development server:
```sh
npm run start:dev
```
Or with Docker:
```sh
docker-compose up --build
```

---

## API Endpoints

- `GET /status` – Public health check
- `POST /auth/login` – Login with email/password, returns JWT
- `GET /profile` – Protected, requires Bearer token

### Example User

- **email:** `user@example.com`
- **password:** `password`

---

## Swagger Docs

- Visit [http://localhost:3000/api](http://localhost:3000/api) for interactive API docs.
- Use the "Authorize" button to test protected endpoints with your JWT.

---

## Postman Collection

- See [`postman_collection.json`](postman_collection.json) in the repo for ready-to-use requests.

---

## Environment Variables

Create a `.env` file in the root:

```
JWT_SECRET=your-secret-key
```

---

## Docker

Build and run with Docker Compose:
```sh
docker-compose up --build
```

---

## Testing

Run all tests:
```sh
npm test
```

---

## Project Structure

```
nestjs-jwt-auth/
├── src/
│   ├── auth/
│   ├── users/
│   ├── app.controller.ts
│   ├── app.module.ts
│   └── main.ts
├── test/
├── .env
├── Dockerfile
├── docker-compose.yml
├── package.json
└── README.md
```

---

## .gitignore

This project uses a comprehensive `.gitignore` to keep your repository clean and secure:

```
# Node
node_modules/
.env
.env.*

# Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# OS
.DS_Store
Thumbs.db

# Test coverage
coverage/

# VSCode
.vscode/

# Others
*.local
*.log

# Docker
*.pid

# Jest
coverage/

# Build
build/

# Misc
*.tgz

# Ignore Postman environment files
*.postman_environment.json
```

---

## Thought Process

- **Simplicity:** Used in-memory user store for fast prototyping and easy testing.
- **Security:** JWT authentication with strict validation and guards.
- **Developer Experience:** Swagger docs, Postman collection, and strict TypeScript for reliability.
- **Production-Ready:** Dockerized, with environment variable support and clean code style.

---

## Bonus Features

- ✅ Unit test for JWT guard (Jest)
- ✅ ESLint + Prettier config
- ✅ Swagger docs with JWT "Authorize" support

---
