# ECP API

> Nodejs MongoDB RESTful API for managing ecp modules for student and teacher.

> [Dependencies](#markdown-header-dependencies) | [ECP API Usage](#markdown-header-ecp-api-usage) | [Student API Docs](https://ecp-api-nodejs.dev.micro.scholastic.com/api-docs/swagger-student.html) | [Teacher API Docs](https://ecp-api-nodejs.dev.micro.scholastic.com/api-docs/swagger-teacher.html)

## Dependencies

- [Nodejs LTS](https://nodejs.org/dist/v12.13.1/node-v12.13.1.pkg)
- [NPM](https://nodejs.org/dist/v12.13.1/node-v12.13.1.pkg)
- [Git](https://git-scm.com/)
- [Babel](https://babeljs.io/)
- [MongoDB](https://www.mongodb.com/download-center/community)
- [Express](http://expressjs.com/)
- [Nodemon](https://nodemon.io/)
- [convert-excel-tojson](https://www.npmjs.com/package/convert-excel-to-json)
- [xml-js](https://www.npmjs.com/package/xml-js)

## ECP API Usage

##### Install project dependencies

    npm i

##### Start the dev Node server

    npm run dev

##### Start the prod Node server

    npm run server

##### ECP API url and port

    http://localhost:5500/

## ECP API Data Converter Usage

##### Convert XML and Excel to JSON

    npm run ecp-converter

##### Import meta data into MongoDB

    npm run ecp-meta-import
