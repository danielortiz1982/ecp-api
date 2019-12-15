# ECP Student API
> Nodejs MongoDB REST API for managing ecp student collections

> [Dependencies](#dependencies) | 

## Dependencies
* [Nodejs](https://nodejs.org/en/)
* [NPM](https://nodejs.org/en/)
* [Git](https://git-scm.com/)
* [Babel](https://babeljs.io/)

### Install Nodejs & NPM for Windows, OSX and Linux
[https://nodejs.org](https://nodejs.org/en/)

## Install Dependencies

##### Install Babel core & cli globally on your machine
    npm install -g --save-dev @babel/core @babel/cli

## ECP API Usage

##### Clone project 
    git clone https://github.com/danielortiz1982/ecp-api.git

##### Install project dependencies
    npm i

##### Start the dev Node server
    npm run dev

##### Start the prod Node server
    npm run start

##### ECP API server url and port
    http://localhost:5500/


## ECP API Routes

### Users Routes

##### (GET) - return all Users
    /ecp-api/v1/users

##### (GET) - return User by id
    /ecp-api/v1/user/:id

##### (POST) - add new User
    /ecp-api/v1/users

##### (DELETE) - remove User by id
    /ecp-api/v1/user/:id

##### (PUT) - update User by id
    /ecp-api/v1/user/:id




