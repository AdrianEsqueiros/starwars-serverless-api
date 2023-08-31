
## Endpoint:

Lambda URL: https://hsujf6a4n3.execute-api.us-east-1.amazonaws.com/api


## Descripción del reto técnico:

- Crear una API en Node.js con el framework Serverless para un despliegue en AWS.
- Adaptar y transformar los modelos de la API SWAPI a español, es decir tienen que mapear todos los nombres de los atributos del inglés al español. Ejemplo: { “name” : “Luke”} cambiar a {“nombre” : ”Luke”}.
- Integrar la API de prueba StarWars API (líneas abajo está el link) se deben integrar uno o más endpoints.
- Crear un modelo de su elección mediante el uso de un endpoint POST, la data se tendrá que almacenar dentro de una base de datos.
- Crear un endpoint GET que muestre la data almacenada.

## En el siguiente repositorio
- Se cumplió con la descripción del reto técnico, y la arquitectura solicitada.
- Se desarrolló con Nestjs y serverless framework para su deploy serverless en aws utilizando lambda, además se utilizó DynamoDB para su persistencia de la base de datos.
- El proyecto utiliza AWS translate para traducir los atributos y también la descripción del famoso opening crawl de las películas de Star Wars.
- Consulta la api de SWAPI y traduce el modelo e inserta los datos en una tabla de DynamoDB.
- Se realizó un CRUD completo de 2 tabla de DynamoDB (Films, People).
- Se realizó las pruebas unitarias de los servicios correspodientes.


## Requirements

- Node.js v.18
- aws account: iam with admin access for practical porpuses


## Setup & Installation

Clone the repository and install the dependencies.

```bash
$ npm install
```
## Running the app

```bash
# development
$ npm run start
```
## Importante para el deploy en AWS

# deployment
```
Instalar las dependencias y
Generar la carpeta dist, para su deploy en AWS 

$ npm run build
$ sls deploy 
```

## Test

```bash
# unit tests
$ npm run test

```
