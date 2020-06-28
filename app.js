const express   = require('express')
const app       = express()

// Require Routers
const EcRouterConfig = require('./router/src/ec-router-config')

for(let router in EcRouterConfig){
    router = require(EcRouterConfig[router])
    app.use(router)
}
// Require Routers

app.get('/', (req, res) => {
    res.status(200).send('ECP API - Jest Test Server.').end()
})

module.exports = app