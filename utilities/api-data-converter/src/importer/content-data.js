const fs                = require('fs')
const chalk             = require('chalk')
const MongoClient       = require('mongodb').MongoClient
const dbConfig          = require('../../../db/db-connect')
const url               = `${dbConfig.dbConnection}/${dbConfig.database}`
const database          = `${dbConfig.database}`
const option            = { useUnifiedTopology: true }
const apiDataConfig     = require('../../api-data-config.json')
const {EcPostApi}       = require('../../../db/ec-post-data')

const createCollections = async collection => {

    try{

        let mongo               = await MongoClient.connect(`${url}/${database}`, option)
        let ecCollection        = mongo.db(database).collection(collection)
        let deleteCollections   = await ecCollection.deleteMany({})
        let getDB               = mongo.db(database)
        let makeCollection      = await getDB.createCollection(collection)
        mongo.close()

    }catch(e){
        console.log(e)
    }
}

const ecCollections = [
    'ecactivitycards',
    'ecalphabetcardsmodel',
    'ecflipchartsmodel',
    'eclargegruopcardmodel',
    'ecnumbercardsmodel',
    'ecstrategycardsmodel',
    'ecteachercardsmodel',
    'ecteacherguidemodel',
    'vocabularycardsmodel'
]

ecCollections.forEach( c => createCollections(c))

const importContent = async (c, json, name) => {
    try{
        await EcPostApi(c, json)
        console.log(`imported - ${name} into ${c}: collections`)
    }catch(e){
        console.log(e)
    }
}

fs.readdir(`../../${apiDataConfig.json.path}`, (err, jsonFiles) => {

    if(err)
        console.error(err)
    
    jsonFiles.forEach(jsonFile => {
        const fileNameArr   = jsonFile.split('_')
        const fileName      = fileNameArr.join('_')  
        const jsonData      = require(`../../data/json-data/${fileName}`)

        // console.log(fileNameArr[1])

        if(fileNameArr[1] === 'AC')
            importContent(ecCollections[0], jsonData, fileName)

        if(fileNameArr[1] === 'AlphabetCards')
            importContent(ecCollections[1], jsonData, fileName)

        if(fileNameArr[1] === 'Flipchart')
            importContent(ecCollections[2], jsonData, fileName)

        if(fileNameArr[1] === 'LGC')
            importContent(ecCollections[2], jsonData, fileName)



        // switch(fileNameArr[1]){
        //     case 'AC':
        //         fs.readFile(`../../${apiDataConfig.json.path}/${jsonFile}`, {encoding: 'utf-8'}, async (err, jsonData)=>{
        //             try{
        //                 const response = await EcPostApi(ecCollections[0], JSON.parse(jsonData))
        //                 console.log(response)
        //             }catch(e){
        //                 console.log(e)
        //             }
        //         })
                
        //         break

        //     case 'AlphabetCards':
        //         fs.readFile(`../../${apiDataConfig.json.path}/${jsonFile}`, {encoding: 'utf-8'}, async (err, jsonData)=>{
        //             try{
        //                 const response = await EcPostApi(ecCollections[1], JSON.parse(jsonData))
        //                 console.log(response)
        //             }catch(e){
        //                 console.log(e)
        //             }
        //         })
        //         break

        //     case 'Flipchart':
        //         fs.readFile(`../../${apiDataConfig.json.path}/${jsonFile}`, {encoding: 'utf-8'}, async (err, jsonData)=>{
        //             try{
        //                 const response = await EcPostApi(ecCollections[2], JSON.parse(jsonData))
        //                 console.log(response)
        //             }catch(e){
        //                 console.log(e)
        //             }
        //         })
        //         break

        //     // case 'LGC':
        //     //     console.log(fileNameArr[1])
        //     //     break

        //     // case 'Number':
        //     //     console.log(fileNameArr[1])
        //     //     break

        //     // case 'StrategyCards':
        //     //     console.log(fileNameArr[1])
        //     //     break

        //     // case 'TC':
        //     //     console.log(fileNameArr[1])
        //     //     break

        //     // case 'TG':
        //     //     console.log(fileNameArr[1])
        //     //     break

        //     // case 'VC':
        //     //     console.log(fileNameArr[1])
        //     //     break
        // }
    })
})