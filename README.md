# TaskFlow Pro

A backend-first task management project planned and structured as a scalable application for organizing tasks, tracking progress, and managing work efficiently.

## Overview

This repository currently acts as a project blueprint for a task management system. It includes a proposed architecture, technology stack, and a structured plan for future development. The project is positioned as a Spring Boot-based backend application with potential frontend expansion later.

## Current Status

This repository is currently in an early planning and architecture stage. The README documents the intended system design, expected layers, and roadmap rather than a fully completed application.

## Planned Features

- task creation, update, and deletion
- task status tracking
- assignment and ownership management
- project-based organization
- REST API support
- persistence with MySQL
- test coverage with JUnit and Mockito

## Tech Stack

- Java 17+
- Spring Boot
- Spring Web
- Spring Data JPA
- MySQL
- Maven
- JUnit 5
- Mockito
- Lombok

## Architecture

The project is designed around a layered application structure:

```text
Controller Layer
    ↓
Service Layer
    ↓
Repository Layer
    ↓
Database
```

Planned package structure:

```text
taskflow-pro/
├── backend/
│   ├── src/main/java/com/taskflow/
│   │   ├── controller/
│   │   ├── service/
│   │   ├── repository/
│   │   ├── entity/
│   │   ├── dto/
│   │   │   ├── request/
│   │   │   └── response/
│   │   ├── exception/
│   │   ├── config/
│   │   └── util/
│   └── src/test/
├── frontend/
├── docs/
├── .github/
├── README.md
├── .gitignore
└── pom.xml
```

## Getting Started

### Prerequisites

- Java 17+
- Maven 3.9+
- MySQL 8+
- Git

### Setup

```bash
git clone https://github.com/VenkatPrasad007/taskflow-pro.git
cd taskflow-pro
```

Create a database:

```sql
CREATE DATABASE taskflow_pro;
```

Configure database credentials in the backend properties file:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/taskflow_pro
spring.datasource.username=your_username
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

Then run the backend:

```bash
cd backend
mvn clean install
mvn spring-boot:run
```

## API Roadmap

The following endpoints are planned:

| Module | Method | Endpoint | Status |
|--------|--------|----------|--------|
| Tasks | GET | `/api/tasks` | Planned |
| Tasks | GET | `/api/tasks/{id}` | Planned |
| Tasks | POST | `/api/tasks` | Planned |
| Tasks | PUT | `/api/tasks/{id}` | Planned |
| Tasks | DELETE | `/api/tasks/{id}` | Planned |

## Development Notes

This project is intended to demonstrate professional backend engineering practices and a clean domain-driven design approach. It is suitable for building a production-style task management application and can later be evolved into a full-stack product.

## License

This project is intended for educational and portfolio purposes.
