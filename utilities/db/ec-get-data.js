const MongoClient                   = require('mongodb').MongoClient
const dbConfig                      = require('./db-connect')
const url                           = `${dbConfig.dbConnection}/${dbConfig.database}`
const database                      = `${dbConfig.database}`
const option                        = { useUnifiedTopology: true }

const EcGetData = async (GetCollection, query, sort) => {
    let mongo   = await MongoClient.connect(`${url}/${database}`, option)
    let results =  mongo.db(database).collection(GetCollection)
    let arrData = await results.find(query).sort(sort).toArray()
    mongo.close()
    return arrData
}

const EcGetSingle = async (GetCollection, query, sort) => {
    let mongo       = await MongoClient.connect(`${url}/${database}`, option)
    let results     =  mongo.db(database).collection(GetCollection)
    let arrData     = await results.find(query, {}).sort(sort).toArray()
    mongo.close()
    return arrData
}

module.exports = {EcGetData, EcGetSingle}