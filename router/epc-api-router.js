const express   = require('express')
const EpcApiModel = require('../models/epc-api-model')
const EcpApiRouter = new express.Router()

EcpApiRouter.get('/ecp-api/v1/collections', async (req, res)=>{
    try{
        const ecpCollections = await EpcApiModel.find()
        res.status(201).send(ecpCollections)
    }catch(e){
        res.status(400).send(e)
    }
})

EcpApiRouter.post('/ecp-api/v1/collections', async (req, res)=>{
    const ecpCollectionsPost = new EpcApiModel(req.body)

    await ecpCollectionsPost.save()

    res.send(ecpCollectionsPost)
})


module.exports = EcpApiRouter