# Backend - Bookstore (Spring Boot)

## Run locally (requires JDK 17+ and Maven)

1. Build:
   ```bash
   mvn clean package
   ```

2. Run:
   ```bash
   mvn spring-boot:run
   ```

This project uses H2 in-memory database by default. Access H2 console at http://localhost:8080/h2-console (jdbc:h2:mem:bookstoredb).

Seeded accounts:
- admin@bookstore.com / admin123 (ROLE_ADMIN)
- user@bookstore.com / user123 (ROLE_USER)

Swagger UI (after running app):
- http://localhost:8080/swagger-ui.html
- http://localhost:8080/swagger-ui/index.html

Notes:
- JWT authentication is implemented. On login, a JWT token is returned. Include `Authorization: Bearer <token>` header to access protected endpoints.
- To switch to MySQL, update `src/main/resources/application.properties`.
