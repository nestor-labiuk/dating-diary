# Gestión de biblioteca

 ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![npm](https://img.shields.io/badge/npm-888888.svg?style=for-the-badge&logo=npm&logoColor=) ![npm](https://img.shields.io/badge/mongo-444.svg?style=for-the-badge&logo=mongodb&logoColor=) ![npm](https://img.shields.io/badge/mongoose-266?style=for-the-badge&logo=mongoose&logoColor=)

El objetivo es realizar un sistema de backend en node.js, que permita gestionar
los préstamos y ventas de libros de una biblioteca que ofrezca un
servicio eficiente y cómodo para los usuarios.

## Desarrollo

- Para clonar el repositorio del proyecto:

  ```json
  git clone https://https://github.com/nestor-labiuk/library-management.git
  ```

- Después tenes que instalar las dependencias:

  ```json
  npm install 
  ```

---

## Scripts del proyecto

| Script        | Descripción                                         |
| ------------- | --------------------------------------------------- |
| npm star      | Inicia un servidor web local.                       |
| npm run dev   | Inicia servidor local y actualiza los cambios       |
| npm run test  | Inicia los test que trae por defecto react.         |

---

## Dependencias Usadas en el Front

- [react](https://es.react.dev/) Entorno de ejecución necesario para hacer andar la aplicación.

- [react-dom](https://es.legacy.reactjs.org/) Librería que se encarga de renderizar los componentes de React en el
 navegador.

- [react-hook-form](https://react-hook-form.com/) Para manejar el ciclo de vida de los componentes.

- [react-router-dom](https://reactrouter.com/en/main) Para las rutas de navegación dentro de la aplicación.
- [react-toastify](https://www.npmjs.com/package/react-toastify) Para mostrar alertas personalizada

## Dependencias Usadas en el Back

- [bcrypt](https://www.npmjs.com/package/bcrypt) Para encriptar las contraseñas.
- [cors](https://www.npmjs.com/package/cors) Activa el CORS y restringe las solicitudes HTTP de origen cruzado para varias funciones.  
- [dotenv](https://www.npmjs.com/package/dotenv) Carga variables de entorno desde un archivo .env en process.env.
- [express](https://www.npmjs.com/package/express) Para manejar la estructura de peticiones.
- [express-validator](https://www.npmjs.com/package/express-validator) Permite añadir middlewares de validación.
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) Para añadir validaciones de permisos de tipo administrador.
- [mongoose](https://www.npmjs.com/package/mongoose) Para hacer consultas a una base de datos de MongoDB.

## Estructura de carpetas

``` json
├── node_modules
├── src
    └── controllers
    └── db
    └── loggers
    └── middlewares
    └── models
    └── request
    └── routes
    └── server.js
└── test
    └──
    └──
├── .env     
├── .env.example     
├── .eslint.cjs     
├── .gitignore
├── .app.js
├── package-lock.json
├── package.json
├── README.md
```

## Crédito / Reconocimientos / Participantes

Esta aplicación fue creado [Nestor Labiuk](https://github.com/nestor-labiuk)
