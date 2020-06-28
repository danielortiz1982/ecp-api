if (process.env.SCH_CONSUL) {
    require('newrelic');
}
// Server Config
const express                   = require('express')
const chalk                     = require('chalk')
const server                    = express()
const PORT                      = process.env.port || 5500
const ServerMessage             = `ECP API is running on localhost:${PORT}`
const db                        = require('./utilities/db/db-connect')
const pub                       = `${__dirname}/public/`
const app                       = require('./app')

server.use(express.static(pub))
server.use(express.json())
server.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next();
});
// Server Config

// Require Routers
const EcRouterConfig = require('./router/src/ec-router-config')

for(let router in EcRouterConfig){
    router = require(EcRouterConfig[router])
    server.use(router)
}
// Require Routers

if(!process.env.SCH_CONSUL){
    app.listen(5000)
}

server.listen(PORT, console.log(chalk.blue(ServerMessage)))