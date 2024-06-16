# Project Startup Guide

Welcome to the project! This guide will show you how to start the project using Docker Compose. You can start the project as a single monolith application or as a series of microservices running in different instances.

## Prerequisites

Before you start, make sure you have Docker and Docker Compose installed on your system. If you do not have these installed, please visit [Docker's official website](https://www.docker.com/get-started) for installation instructions.

## Starting the Project

### Monolithic Deployment

To start the project as a monolith, where all components run in a single container, use the following command:

```bash
docker-compose -f ".\docker-compose-monolith.yml" up --build
```

To start the project with each module running in its own instance (as microservices), use the command below:
```bash
docker-compose -f ".\docker-compose-microservices.yml" up --build
```

API documentation is available at <http://localhost:3000/swagger>

>