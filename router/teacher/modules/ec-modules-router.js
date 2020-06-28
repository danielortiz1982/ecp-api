const express                 = require('express')
const EcModuleRouter          = new express.Router()
const {EcGetData}             = require('../../../utilities/db/ec-get-data')
const EcModuleCollection      = 'ec_modules'

EcModuleRouter.get(`/ecp-api/v3/teacher/modules/`, async (req, res) => {
  let query = {}
  let sort = {'MODULEID': 1}
  try{
    let moduleResponse = await EcGetData(EcModuleCollection, query, sort)
    res.status(200).send(moduleResponse).end()
  }catch(err){
    res.status(400).send(err).end()
  }
})

EcModuleRouter.get(`/ecp-api/v3/teacher/modules/:lang/`, async (req, res) => {
  let query = {'LANGUAGE': req.params.lang}
  let sort = {'MODULEID': 1}
  try{
    let moduleResponse = await EcGetData(EcModuleCollection, query, sort)
    res.status(200).send(moduleResponse).end()
  }catch(err){
    res.status(400).send(err).end()
  }
})

module.exports = EcModuleRouter