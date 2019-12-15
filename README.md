# ECP Student API
> Nodejs MongoDB REST API for managing ecp student collections

> [Dependencies](#dependencies) | [ECP API Usage](#ecp-api-usage) | [ECP Routes](#ecp-api-routes) | [ECP Models](#ecp-api-models)

## Dependencies
* [Nodejs LTS](https://nodejs.org/en/)
* [NPM](https://nodejs.org/en/)
* [Git](https://git-scm.com/)
* [Babel](https://babeljs.io/)
* [MongoDB](https://www.mongodb.com/download-center/community)
* [Mongoose](https://mongoosejs.com/)
* [Express](http://expressjs.com/)
* [Bcrypt](https://www.npmjs.com/package/bcrypt)
* [validator](https://www.npmjs.com/package/validator)

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

### Collections Routes

##### (GET) - return all Collections
    /ecp-api/v1/collections

##### (GET) - return Collection by id
    /ecp-api/v1/collection/:id

##### (POST) - add new Collection
    /ecp-api/v1/collections

##### (DELETE) - remove Collection by id
    /ecp-api/v1/collection/:id

##### (PUT) - update Collection by id
    /ecp-api/v1/collection/:id

## ECP API Models

##### User Model

    {
        firstName: {
            type: String,
            required: true,
            trim: true
        },
        lastName: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            trim: true,
            validate(value){
                if(!validator.isEmail(value)){
                    throw new Error('Email is invalid.')
                }
            }
        },
        phone: {
            type: Number,
            default: 0,
            required: true,
            maxlength: 10,
            validate(value){
                if( value < 0 ){
                    throw new Error('Age must be a positive number')
                }
            }
        },
        age: {
            type: Number,
            default: 0,
            required: true,
            maxlength: 2,
            validate(value){
                if( value < 0 ){
                    throw new Error('Age must be a positive number')
                }
            }
        },
        password: {
            type: String,
            trim: true,
            require: true,
            minlength: 7,
            validate(value){
                if(value.toLowerCase().includes('password')){
                    throw new Error('Password can not contain password')
                }
            }
        },
        addresses: [
            {
                primaryAddress: {
                    type: String,
                    require: true,
                    trim: true,
                    lowercase: true,
                    minlength: 3
                },
                primaryCity: {
                    type: String,
                    require: true,
                    trim: true,
                    minlength: 2
                },
                primaryState: {
                    type: String,
                    uppercase: true,
                    maxlength: 2,
                    minlength: 2,
                    trim: true,
                    require: true
                },
                primaryPostalCode: {
                    type: Number,
                    maxlength: 5,
                    minlength: 5,
                    trim: true,
                    require: true
                },
                primaryAddressType: {
                    type: String,
                    require: true,
                    trim: true
                }
            },
            {
                secondaryAddress: {
                    type: String,
                    trim: true,
                    lowercase: true,
                    minlength: 3
                },
                secondaryCity: {
                    type: String,
                    trim: true,
                    minlength: 2
                },
                secondaryState: {
                    type: String,
                    uppercase: true,
                    maxlength: 2,
                    minlength: 2,
                    trim: true
                },
                secondaryPostalCode: {
                    type: Number,
                    maxlength: 5,
                    minlength: 5,
                    trim: true
                },
                secondaryAddressType: {
                    type: String,
                    require: true,
                    trim: true
                }
            }
        ],
        userLocation: {
            userLatitude: {
                type: String,
                default: ""
            },
            userLongitude: {
                type: String,
                default: ""
            }
        },
        userAgent: {
            type: String,
            default: ""
        },
        avatarImage: {
            type: String,
            trim: true,
            default: "../images/avatar/dummy-img.jpg"
        }
    }






