const express                       = require('express')
const EcLastVisitedRouter           = new express.Router()
const {EcGetData, EcGetSingle}      = require('../../../utilities/db/ec-get-data')
const EcCookiePostApi               = require('../../../utilities/db/ec-cookie-post-data')
const EcLastVisitedCollection       = 'eclastvisitedmodel'

EcLastVisitedRouter.post('/ecp-api/v3/teacher/last-visited/post/', (req, res)=>{
    EcCookiePostApi(EcLastVisitedCollection, req.body)
    res.send(req.body);
})

EcLastVisitedRouter.get(`/ecp-api/v3/teacher/last-visited/`, async (req, res) => {
    let query = {}
    try{
      let lastVistedResponse = await EcGetData(EcLastVisitedCollection, query)
      res.status(200).send(lastVistedResponse).end()
    }catch(err){
      res.status(400).send(err).end()
    }
})

EcLastVisitedRouter.get(`/ecp-api/v3/teacher/last-visited/:id/`, async (req, res) => {
    let query = {
        _id: req.params.id
    }
    try{
      let lastVistedResponse = await EcGetSingle(EcLastVisitedCollection, query)
      res.status(200).send(lastVistedResponse).end()
    }catch(err){
      res.status(400).send(err).end()
    }
})

module.exports = EcLastVisitedRouter