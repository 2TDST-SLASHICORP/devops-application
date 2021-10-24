# Dimdim - Frontend

## Instalando e executando frontend local

```sh
npm install -g @angular/cli
```

## Executando o servidor do frontend com ng

```sh
npm run startport
```

URL: http://localhost:8081/

# Executando ambiente em Docker

**1.0 Executando em seu local Docker, o DIMDIM-FRONTEND Container**

## Executando o Build da imagem docker local

```bash
git clone https://github.com/2TDST/dimdim-frontend.git
cd dimdim-frontend
```

```bash
$ docker-compose up -d
```

## Validando ambiente

```bash
$ docker ps

CONTAINER ID   IMAGE                             COMMAND                  CREATED              STATUS              PORTS                                                  NAMES
9b5a22d3a4f1   dimdim-frontend_dimdim-frontend   "/docker-entrypoint.…"   5 seconds ago        Up 3 seconds        0.0.0.0:8081->80/tcp, :::8081->80/tcp                  dimdim-frontend_dimdim-frontend_1
2abba56c2325   dimdim-backend_dimdim-backend     "java -jar /app.jar"     About a minute ago   Up About a minute   0.0.0.0:8080->8080/tcp, :::8080->8080/tcp              dimdim-backend_dimdim-backend_1
e0517e9359be   mysql:5.7                         "docker-entrypoint.s…"   About a minute ago   Up About a minute   0.0.0.0:3306->3306/tcp, :::3306->3306/tcp, 33060/tcp   dimdim-backend_mysqldb_1
```
