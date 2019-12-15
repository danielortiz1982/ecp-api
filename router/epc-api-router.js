const express   = require('express')
const EpcApiModel = require('../models/epc-api-model')
const EcpApiRouter = new express.Router()

EcpApiRouter.get('/ecp-api/v1/collections', async (req, res)=>{
    try{
        const ecpCollections = await EpcApiModel.find()
        res.status(200).send(ecpCollections)
    }catch(e){
        res.status(400).send(e)
    }
})

EcpApiRouter.get('/ecp-api/v1/collection/:id', async (req, res)=>{
    const _id = req.params.id
    try{
        const single = await EpcApiModel.findById(_id)
        res.status(200).send(single)
    }catch(e){
        res.status(400).send(e)
    }
})

EcpApiRouter.post('/ecp-api/v1/collections', async (req, res)=>{
    try{
        const ecpCollectionsPost = new EpcApiModel(req.body)
        await ecpCollectionsPost.save()
        res.status(201).send({
            status: 201,
            message: "Successful Post.",
            ecpCollectionsPost
        })
    }catch(e){
        res.status(400).send(e)
    }
})

EcpApiRouter.delete('/ecp-api/v1/collection/:id', async (req, res)=>{
    const _id = req.params.id
    try{
        const single = await EpcApiModel.findByIdAndDelete(_id)
        res.status(201).send(single)
    }catch(e){
        res.status(400).send(e)
    }
})

EcpApiRouter.put('/ecp-api/v1/collection/:id', async (req, res)=>{
    const _id = req.params.id
    try{
        const single = await EpcApiModel.findByIdAndUpdate(_id, req.body, {new: true, runValidators: true})
        res.status(201).send(single)
    }catch(e){
        res.status(400).send(e)
    }
})

module.exports = EcpApiRouter