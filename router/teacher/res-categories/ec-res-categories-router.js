const express                       = require('express')
const EcResCategoriesRouter         = new express.Router()
const {EcGetData}                   = require('../../../utilities/db/ec-get-data')
const EcResCategoriesCollection     = 'ec_res_categories'

EcResCategoriesRouter.get(`/ecp-api/v3/teacher/resource-categories/`, async (req, res) => {
  let query = {}
  let sort = {'CATEGORYID': 1}
  try{
    let resCategoriesResponse = await EcGetData(EcResCategoriesCollection, query, sort)
    res.status(200).send(resCategoriesResponse).end()
  }catch(err){
    res.status(400).send(err).end()
  }
})

EcResCategoriesRouter.get(`/ecp-api/v3/teacher/resource-categories/:lang/`, async (req, res) => {
  let query = {'LANGUAGE': req.params.lang}
  let sort = {'CATEGORYID': 1}
  try{
    let resCategoriesResponse = await EcGetData(EcResCategoriesCollection, query, sort)
    res.status(200).send(resCategoriesResponse).end()
  }catch(err){
    res.status(400).send(err).end()
  }
})

module.exports = EcResCategoriesRouter