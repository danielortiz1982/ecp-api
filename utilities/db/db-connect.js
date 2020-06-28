
let dbConfig = {
    database: process.env.mongo_db || 'ecp-api',
    dbHost: process.env.mongo_host || '127.0.0.1',
    dbUser: process.env.mongo_user || '',
    dbPass: process.env.mongo_pass || '',
    dbConnection: `mongodb://127.0.0.1:27017`,
}

if (dbConfig.dbHost != '127.0.0.1') {
    dbConfig.dbConnection = `mongodb+srv://${dbConfig.dbUser}:${dbConfig.dbPass}@${dbConfig.dbHost}`
}

module.exports = dbConfig