const express                       = require('express')
const MongoClient                   = require('mongodb').MongoClient
const dbConfig                      = require('../../utilities/db/db-connect')
const url                           = `${dbConfig.dbConnection}/${dbConfig.database}`
const database                      = `${dbConfig.database}`
const option                        = { useUnifiedTopology: true }
const HealthCheckRouter             = new express.Router()

HealthCheckRouter.get('/health', async (req, res) => {
  try {
    let mongo             = await MongoClient.connect(`${url}/${database}`, option)
    let adminDB           = mongo.db('admin')
    let listDBs           = await adminDB.admin().listDatabases()
    let connectSuccessful = mongo.topology.s.state
    mongo.close()
    res.status(200).send(connectSuccessful).end()
  } catch (e) {
    console.error(e)
    res.status(500).send(e).end()
  } 
})

module.exports = HealthCheckRouter;