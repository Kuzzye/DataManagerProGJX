# DataManagerProGJX

DataManager Pro es una aplicación de ejemplo que permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en una base de datos MongoDB utilizando Node.js y Docker. Esta aplicación está diseñada para demostrar buenas prácticas en el desarrollo de software y el uso de contenedores Docker.

## Contenidos

- [Descripción del Proyecto](#descripción-del-proyecto)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Requisitos Previos](#requisitos-previos)
- [Configuración del Entorno](#configuración-del-entorno)
- [Ejecución de la Aplicación](#ejecución-de-la-aplicación)
- [Uso de la API](#uso-de-la-api)
- [Verificación de Datos en MongoDB](#verificación-de-datos-en-mongodb)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)

## Descripción del Proyecto

DataManager Pro es una aplicación que permite gestionar ítems en una base de datos MongoDB. Los usuarios pueden crear, leer, actualizar y eliminar ítems utilizando una API RESTful. La aplicación está empaquetada en contenedores Docker para facilitar su despliegue y gestión.

## Tecnologías Utilizadas

- Node.js
- Express
- MongoDB
- Mongoose
- Docker
- Docker Compose

## Requisitos Previos

Antes de empezar, asegúrate de tener instalados los siguientes requisitos:

- [Node.js](https://nodejs.org/) (v14 o superior)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## Configuración del Entorno

1. Clona el repositorio del proyecto:

    ```sh
    git clone <URL_DEL_REPOSITORIO>
    cd datamanager-pro
    ```

2. Crea un archivo `.env` en la raíz del proyecto con las siguientes variables de entorno (opcional):

    ```env
    MONGO_URI=mongodb://mongo:27017/crudapp
    ```

## Ejecución de la Aplicación

1. Construye y levanta los contenedores Docker:

    ```sh
    docker-compose up --build
    ```

2. La aplicación estará disponible en `http://localhost:5000`.

## Uso de la API

### Crear un ítem

- **Método**: `POST`
- **URL**: `http://localhost:5000/items`
- **Body**:
    ```json
    {
        "name": "Sample Item",
        "description": "This is a sample item"
    }
    ```

### Leer todos los ítems

- **Método**: `GET`
- **URL**: `http://localhost:5000/items`

### Leer un ítem específico

- **Método**: `GET`
- **URL**: `http://localhost:5000/items/:itemId`

### Actualizar un ítem

- **Método**: `PATCH`
- **URL**: `http://localhost:5000/items/:itemId`
- **Body**:
    ```json
    {
        "name": "Updated Item Name",
        "description": "Updated description"
    }
    ```

### Eliminar un ítem

- **Método**: `DELETE`
- **URL**: `http://localhost:5000/items/:itemId`

## Verificación de Datos en MongoDB

Puedes verificar los datos directamente en MongoDB utilizando el cliente de MongoDB (`mongo`) dentro del contenedor Docker.

1. Accede al contenedor MongoDB:

    ```sh
    docker exec -it <mongo_container_id> /bin/bash
    ```

2. Inicia el cliente de MongoDB:

    ```sh
    mongo
    ```

3. Interactúa con la base de datos:

    ```sh
    use crudapp
    db.items.find().pretty()
    ```

## Estructura del Proyecto

- **Dockerfile**: Archivo de configuración para Docker.
- **docker-compose.yml**: Archivo de configuración para Docker Compose.
- **server.js**: Archivo principal del servidor Node.js.
- **package.json**: Archivo de configuración de npm.
- **routes/items.js**: Archivo de rutas para la API de ítems.
- **models/Item.js**: Modelo de Mongoose para los ítems.


## Licencia

Este proyecto está licenciado bajo la [MIT License](LICENSE).

