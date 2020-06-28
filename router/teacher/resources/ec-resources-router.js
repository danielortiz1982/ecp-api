const express                   = require('express')
const EcResourcesRouter         = new express.Router()
const {EcGetData}               = require('../../../utilities/db/ec-get-data')
const EcResourcesCollection     = 'ec_resources'

EcResourcesRouter.get(`/ecp-api/v3/teacher/resources/`, async (req, res) => {
  let query = {}
  let sort = {'RESOURCEID': 1}
  try{
    let resourcesResponse = await EcGetData(EcResourcesCollection, query, sort)
    res.status(200).send(resourcesResponse).end()
  }catch(err){
    res.status(400).send(err).end()
  }
})

EcResourcesRouter.get(`/ecp-api/v3/teacher/resources/:lang/`, async (req, res) => {
  let query = {'LANGUAGE': req.params.lang}
  let sort = {'RESOURCEID': 1}
  try{
    let resourcesResponse = await EcGetData(EcResourcesCollection, query)
    res.status(200).send(resourcesResponse).end()
  }catch(err){
    res.status(400).send(err).end()
  }
})

module.exports = EcResourcesRouter