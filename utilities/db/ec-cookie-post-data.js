const MongoClient                   = require('mongodb').MongoClient
const assert                        = require('assert');
const dbConfig                      = require('./db-connect')
const url                           = `${dbConfig.dbConnection}/${dbConfig.database}`
const database                      = `${dbConfig.database}`

const EcCookiePostApi = (PostCookieCollection, arrData) => {
  const insertDocuments = (db, callback) =>{
      const collection = db.collection(PostCookieCollection)
      collection.insertMany(arrData, (err, result)=>{
        assert.equal(err, null);
        callback(result);
      })
  }
  MongoClient.connect(url, (err, client)=>{
    const db = client.db(database);
    insertDocuments(db, () => client.close())
  })
}

module.exports = EcCookiePostApi