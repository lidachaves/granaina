# Documentación

## Backend

### Estructura del backend

Las carpetas del backend se componen de:
#### controller
Contiene los archivos que controlan las acciones del servidor.
Los archivos del controller son:
- product.controller.js: controla las peticiones relacionadas con los productos que no estan relacionadas con las peticiones del panel de la tienda
- search.controller.js: controla las peticiones relacionadas con la búsqueda de productos.
- storeAccount.controller.js: controla las peticiones relacionadas con la configuración de la tienda.
- storeProducts.controller.js: controla las peticiones relacionadas con los productos del panel de la tienda.
- user.controller.js: controla las peticiones relacionadas con la configuración de los compradores
#### middleware
Contiene los archivos de los middleware los cuales son partes de código que se ejecutan antes de ejecutan antes que el resto del código de la página web.
Se compone de:
- auth.js: es el archivo que gestiona la autenticación con json web token, genera una variable llamada user la cual contiene el id del usuario.
#### model
Contiene los archivos de los modelos los cuales definen la estructura de la base de datos en mongoose
Los archivos son:
- product.model.js: definen la estructura de la tabla de productos
user.model.js: define la estructura de la tabla de usuarios
#### routes
Contiene los archivos de las rutas del backend las cuales son:
- product.js: controla la visualización de los productos
- search.js: controla la búsqueda de los productos
- storeAccount.js: controla la configuración de la tienda
- storeProducts.js: controla los productos de la tienda
- user.js: controla la configuración de los usuarios
#### serivces
Contiene el archivo jwt.js el cual controla los json web tokens los cuales se usan para gestionar la autenticación de la página web.
### Funcionamiento de la aplicación
La aplicación usa un stack MERN (**M**ongoDB, **E**xpressJS, **R**eact, **N**odeJS) el cual funciona de la siguiente forma:
- El frontend llega el usuario a traves de un servidor de [Vite](https://vitejs.dev/)
- Las páginas se procesan en el cliente
- Cuando el frontend quiere acceder a alguna parte del backend hace una petición a un servidor secundario el cual aloja el servidor de ExpressJS con NodeJS
- El baquend comprueba que la petición es válida usando el JWT que el frontend ha enviado al backend.
- El servidor hace las peticiones necesarias a la base de datos de MongoDB

### Estructura de la base de datos:
Acualmente la base de datos se compone de dos tablas:
- La tabla de productos la cual contiene todos los productos de la tienda.
- La tabla se usuarios la cual contiene a los clientes y a los compradores.