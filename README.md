# Bookstore Management System (Full Project)

This repository contains a minimal full-stack Bookstore Management System:
- `backend/` - Java Spring Boot REST API (H2 in-memory DB for easy testing)
- `frontend/` - React + Vite frontend (basic pages: Home, Book detail, Login, Register)

## How to run locally

### Backend
Requirements: JDK 17+, Maven
```bash
cd backend
mvn clean package
mvn spring-boot:run
```
Server starts at http://localhost:8080
H2 console: http://localhost:8080/h2-console (jdbc:h2:mem:bookstoredb)

### Frontend
Requirements: Node 18+
```bash
cd frontend
npm install
npm run dev
```

## GitHub
To upload to GitHub:
1. Create a new repository on GitHub.
2. From this project root run:
```bash
git init
git add .
git commit -m "Initial commit - Bookstore full project"
git branch -M main
git remote add origin <YOUR_GIT_REPO_URL>
git push -u origin main
```

## Notes & Next Steps
- JWT authentication is left as a TODO and a mock token is returned on login. This is to ensure the project is runnable for submission. If you want, I can implement full JWT + refresh tokens and secure endpoints.
- Optional: switch to MySQL by updating `backend/src/main/resources/application.properties`.
- I can also create GitHub Actions for CI, Swagger UI integration, and a production-ready deployment guide.
