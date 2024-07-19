<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).


## Ejercicio 📌

Actividades:
✅ - Crea un nuevo proyecto utilizando nestjs llamado “conecta-talentos-backend”
✅ - Crea un nuevo repositorio en github llamado “conecta-talentos-backend”
✅ - Sincroniza tu repositorio local con el repositorio de github
✅ - Identifica las clases necesarias según el escenario planteado y por cada clase define los atributos especificando el tipo de dato necesario.
✅ - Identifica cuales son las relaciones entre los objetos
✅ - Crea las siguientes clases y sus relaciones
      Estudiante
      Empresa
      Oferta Laboral
      Postulación
✅ Haz un commit con el mensaje “Modelo creado” y luego haz un push al repositorio de github.
🚩 Crea el controlador para Estudiantes que permita realizar las siguientes acciones
    Registrar un nuevo estudiante
    Obtener un estudiante según su id
    Obtener todos los estudiantes
    Eliminar un estudiante según su id
    
Crea un servicio para almacenar los datos de los estudiantes y que permita dar soporte a las acciones que maneja el controlador de estudiante
Registrar un nuevo estudiante (Verificar si existe el estudiante según el correo ingresado)
Obtener un estudiante según su id
Obtener todos los estudiantes
Eliminar un estudiante según su id
Haz un commit con el mensaje “Módulo de estudiantes” y luego haz un push al repositorio de github.
 Crea el controlador para Empresas que permita realizar las siguientes acciones
Registrar una nueva empresa
Obtener una empresa según su id
Obtener todas las empresas
Eliminar una empresa según su id
Crea un servicio para almacenar los datos de las empresas y que permita dar soporte a las acciones que maneja el controlador de empresa
Registrar una nueva empresa (Verificar si existe la empresa según el nombre )
Obtener una empresa según su id
Obtener todas las empresas
Eliminar una empresa según su id
Haz un commit con el mensaje “Módulo de empresas” y luego haz un push al repositorio de github.
Crea el controlador para Oferta laboral que permita realizar las siguientes acciones
Crear una nueva oferta laboral
Obtener una oferta laboral según su id
Obtener todas las ofertas laborales, debe ser posible filtrar las ofertas por una empresa en particular y por su estado.
Eliminar una oferta laboral según su id
Crea un servicio para almacenar los datos de las ofertas laborales y que permita dar soporte a las acciones que maneja el controlador de ofertas laborales
Crear una nueva oferta laboral
Obtener una oferta laboral según su id
Obtener todas las ofertas laborales, debe ser posible filtrar las ofertas por una empresa en particular y por su estado.
Eliminar una oferta laboral según su id
Haz un commit con el mensaje “Módulo de Ofertas laborales” y luego haz un push al repositorio de github.
