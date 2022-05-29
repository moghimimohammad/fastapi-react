# FastAPI and react project

## Local Development Using Docker

### prequities

1. Docker
2. docker-compose

### Setup 

build the docker containers by

`docker-compose up --build`

for debuging FastAPI with VS Code you can use this:

`docker-compose -f docker-compose.debug.yml  up --build`

### 

The backend service endpoint is accessible on port 8081. The url for access the user with id=1 is

http://127.0.0.1:8081/user/1

The frontend service is acessible on port 3000. The url for the user with id=1 is

http://127.0.0.1:3000/user/1
