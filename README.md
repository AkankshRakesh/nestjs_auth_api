# NestJS JWT Auth Assignment

## Goal
Show you can set up a clean NestJS project, implement JWT auth, and write idiomatic TypeScript.

---

## Functional Requirements

1. **Public Route**
   - `GET /status` returns `{ "status": "OK" }`.
2. **Auth Flow**
   - `POST /auth/login` accepts `{ email, password }`, validates against a hard-coded user, and returns a signed JWT.
3. **Protected Route**
   - `GET /profile` returns the user object only when a valid `Authorization: Bearer <token>` header is present.

---

## Tech Constraints
- NestJS v11+
- TypeScript strict mode
- JWT via `@nestjs/jwt`
- In-memory user store (no DB needed)

---

## Deliverables
- Source code in a public GitHub repo
- `README.md` with setup steps, env vars, and your thought process
- Postman collection for demo
- Optional: Dockerfile + docker-compose.yml

---

## Bonus Points
- Unit test for the JWT guard (Jest)
- ESLint + Prettier config
- Swagger docs via `@nestjs/swagger`

---

## Setup Steps

1. **Clone the repository**
   ```sh
   git clone <your-repo-url>
   cd <repo-folder>
   ```
2. **Install dependencies**
   ```sh
   npm install
   ```
3. **Configure environment variables**
   - Copy `.env.example` to `.env` and set `JWT_SECRET`.
   - Example:
     ```env
     JWT_SECRET=your-secret-key-here
     ```
4. **Run the app**
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
- Visit [http://localhost:3000/api](http://localhost:3000/api) for interactive API docs and JWT authentication testing.

---

## Postman Collection
- See `postman_collection.json` in the repo for ready-to-use requests.

---

## Thought Process
- **Project Structure:** Used idiomatic NestJS module/controller/service layout for clarity and scalability.
- **Auth:** Used `@nestjs/jwt` for JWT handling and Passport for guard integration. Hard-coded user for simplicity.
- **Validation:** Used DTOs and class-validator for input validation.
- **Testing:** Added a Jest unit test for the JWT guard to ensure protected routes are enforced.
- **Linting/Formatting:** Included ESLint and Prettier for code quality and consistency.
- **Docs:** Used Swagger for API documentation and easy manual testing.
- **Docker:** Provided Dockerfile and docker-compose for easy containerized setup.

---

## Scripts
- `npm run start:dev` – Start in watch mode
- `npm run test` – Run unit tests
- `npm run lint` – Run ESLint

---

## Environment Variables
- `JWT_SECRET` – Secret key for JWT signing (required)

---

## License
MIT