# Getting Started

### Reference Documentation

These are APIs that we need to provide:

```yaml
Methods	    Urls                            Actions

POST	    /api/agencias                   create new Tutorial
GET         /api/agencias                   retrieve all agencias
GET         /api/agencias/:id	            retrieve a Tutorial by :id
PUT         /api/agencias/:id	            update a Tutorial by :id
DELETE	    /api/agencias/:id               delete a Tutorial by :id
DELETE	    /api/agencias                   delete all agencias
GET         /api/agencias/published         find all published agencias
GET         /api/agencias?nome=[keyword]    find all agencias which name contains keyword
```

## Spring Boot, MySQL, JPA, Hibernate Rest API

Build Restful CRUD API for a simple 'Agencias' application using Spring Boot, Mysql, JPA and Hibernate.

## Requirements

1. Java JDK (v8+) (https://www.oracle.com/technetwork/java/javase/downloads/index.html)
2. Maven (v3+) (https://maven.apache.org/download.cgi)
3. MySQL

## How-To Local Setup

**1. Clone the application**

```bash
git clone https://github.com/2TDST/dimdim-backend.git
```

**2.0 Running local Docker Mysql Container**

```bash
$ docker run --name fiap-mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=ag_dimdim_db -d mysql
```

**3. Change mysql username and password as per your installation**

+ open `src/main/resources/application.properties`

+ change `spring.datasource.username` and `spring.datasource.password` as per your mysql installation

**4. Build and run the app using maven**

```bash
mvn package

java -jar target/ag-dimdim-api.jar
```

Alternatively, you can run the app without packaging it using:

```bash
mvn spring-boot:run
```

The app will start running at <http://localhost:8080>.

You can test them using postman or any other rest client.

# Executando ambiente em Docker

**1.0 Executando em seu local Docker, o DIMDIM-BACKEND Container**

## Executando o Build da imagem docker local

```bash
git clone https://github.com/2TDST/dimdim-backend.git
cd dimdim-backend
```

```bash
$ docker-compose up -d
```

## Validando ambiente

```bash
$docker ps

CONTAINER ID   IMAGE                        COMMAND                  CREATED         STATUS         PORTS                                                  NAMES
2abba56c2325   dimdim-backend_dimdim-backend     "java -jar /app.jar"     7 minutes ago   Up 7 minutes   0.0.0.0:8080->8080/tcp, :::8080->8080/tcp              dimdim-backend_dimdim-backend_1
e0517e9359be   mysql:5.7                         "docker-entrypoint.s…"   7 minutes ago   Up 7 minutes   0.0.0.0:3306->3306/tcp, :::3306->3306/tcp, 33060/tcp   dimdim-backend_mysqldb_1

```