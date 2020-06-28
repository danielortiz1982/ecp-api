const MongoClient                   = require('mongodb').MongoClient
const dbConfig                      = require('./db-connect')
const url                           = `${dbConfig.dbConnection}/${dbConfig.database}`
const database                      = `${dbConfig.database}`
const option                        = { useUnifiedTopology: true }

const EcPostApi = async (PostCollection, arrData) => {
  let mongo         = await MongoClient.connect(`${url}/${database}`, option)
  let EcCollection  = mongo.db(database).collection(PostCollection)
  let postArr       = await EcCollection.insertMany(arrData)
  mongo.close()
  return postArr
}

const EcMetaPostApi = async (PostCollection, arrData) => {
  let mongo             = await MongoClient.connect(`${url}/${database}`, option)
  let EcCollection      = mongo.db(database).collection(PostCollection)
  let deleteCollections = await EcCollection.deleteMany({})
  let postArr           = await EcCollection.insertMany(arrData)
  mongo.close()
  return postArr
}

module.exports = {EcPostApi, EcMetaPostApi}