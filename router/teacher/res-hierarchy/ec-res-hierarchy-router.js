const express                       = require('express')
const EcResHierarchyRouter          = new express.Router()
const {EcGetData}                   = require('../../../utilities/db/ec-get-data')
const EcResHierarchyCollection      = 'ec_res_hierarchy'

EcResHierarchyRouter.get(`/ecp-api/v3/teacher/resource-hierarchy/`, async (req, res) => {
  let query = {}
  let sort = {'PARENTID': 1, 'SEQUENCE': 1}

  try{
    let resHierarchyResponse = await EcGetData(EcResHierarchyCollection, query, sort)
    res.status(200).send(resHierarchyResponse).end()
  }catch(err){
    res.status(400).send(err).end()
  }
})

EcResHierarchyRouter.get(`/ecp-api/v3/teacher/resource-hierarchy/:lang/`, async (req, res) => {
  let query = {'calcLANG': req.params.lang}
  let sort = {'PARENTID': 1, 'SEQUENCE': 1}
  
  try{
    let resHierarchyResponse = await EcGetData(EcResHierarchyCollection, query, sort)
    res.status(200).send(resHierarchyResponse).end()
  }catch(err){
    res.status(400).send(err).end()
  }
})

module.exports = EcResHierarchyRouter