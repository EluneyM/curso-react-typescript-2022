# Curso React
Entorno dockerizado para desarrollo, solo frontend disponible, versión de node `16.15.1`.

## Requisitos
Para poder correr la aplicación es necesario [docker](https://docs.docker.com/get-docker/), [docker-compose](https://docs.docker.com/compose/install/) y un interprete de bash para correr el script de incialización.


## Primer despliegue
Ejecutar el script `init.sh`, seleccionar el ambiente de `desarrollo`, el script está escrito en bash y se puede ejecutar como el ejemplo:
```shell
./init.sh
```

Ejecutar el siguiente comando la primara vez para levantar el proyecto buildeando la imagen primero:
```shell
docker-compose up -d --build
```
> En algunas versiones el comando se escribe sin guión
> `docker compose up -d --build`

La aplicación esta disponible en el puerto 3000.

http://localhost:3000/

## Comando útiles
Instalar dependencias:
```shell
docker-compose exec frontend npm i
```

Entrar al contenedor:
```shell
docker-compose exec frontend bash
```

Listar y ver estado de los contenedores:
```shell
docker-compose ps
```

Ejecutar los contenedores y dejar libre la consola, la opción `-d` (detach) evita que la consola quede escuchando los logs de los contenedores:
```shell
docker-compose up -d
```

Detener y borrar los contenedores, también elimina la red:
```shell
docker-compose down
```

Reiniciar un contenedor:
```shell
docker-compose restart 'nombre-del-servicio-sin-comillas'
```

Ver los logs de los contenedores, la opción `-f` permite que la consola quede escuchando los siguientes eventos de log:
```shell
docker-compose -f logs
```

Ver el log de un contenedor
```shell
docker-compose -f logs 'nombre-del-servicio-sin-comillas'
```

