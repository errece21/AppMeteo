## AppMeteo: funcionalidad

Este proyecto nos permite acceder en tiempo real a los datos meteorológicos de cualquier ubicación del mundo.

## Creación del proyecto y obtención de datos

Este proyecto ha sido generado con [Angular CLI](https://github.com/angular/angular-cli) version 14.2.6.

Los datos meteorológicos se han obtenido a través de la API OpenWeatherMap (https://openweathermap.org/current), utilizando para ello una APIkey de mi propiedad.

## Instalaciones necesarias

Inicialmente, será necesario tener instalado, en primer lugar, Node/npm (https://nodejs.org/es/), y en segundo lugar Angular CLI (https://angular.io/cli) en nuestro ordenador.

## 1. Obtención y acceso al proyecto: GitHub

El proyecto se encuentra alojado en GitHub, en el enlace (https://github.com/errece21/AppMeteo.git). Acceder a este link para su descarga o clonación desde el repositorio.

Si ya se tienen instalados Node y Angular CLI, se podrá acceder al proyecto desde GitHub en el enlace proporcionado. 

## 2. Construcción del proyecto

Introducir el comando `ng build` en la carpeta raíz del proyecto para construir el proyecto. La información del proyecto se almacenará en el directorio `dist/`.

## 3. Servidor de desarrollo: visualización del proyecto

Introducir el comando `ng serve` en la carpeta raíz del proyecto para acceder al servidor de desarrollo. Después, visitar la página `http://localhost:4200/`, donde se podrá ver y probar la aplicación. La aplicación se recargará automáticamente si se modifica alguno de sus archivos.

## Estructura de código

Introducir el comando `ng generate component component-name` para crear un nuevo componente. También se puede usar `ng generate directive|pipe|service|class|guard|interface|enum|module`, dependiendo de lo que se desee crear.

## Tests unitarios

Introducir el comando `npm run jest` para ejecutar los tests unitarios via [Jest](https://jestjs.io/docs/testing-frameworks). Esto generará la carpeta 'coverage' dentro del proyecto, que alojará el archivo index.html que nos permitirá revisar el estado de los tests de cada componente o servicio del proyecto.

## Tests end-to-end

Introducir el comando `ng e2e` para ejecutar los tests end-to-end a través de su plataforma de elección. Para usar este comando, es necesario añadir primero el paquete que implementa las características de los tests end-to-end.

## Ayuda adicional

Para obtener más ayuda sobre Angular CLI introduzca el comando `ng help` o visite la página [Angular CLI Overview and Command Reference](https://angular.io/cli).
