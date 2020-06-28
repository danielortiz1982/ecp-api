const express                       = require('express')
const EcHomepageTipsRouter          = new express.Router()
const {EcGetData}                   = require('../../../utilities/db/ec-get-data')
const EcHomepageTipsCollection      = 'ec_homepage_tips'

EcHomepageTipsRouter.get(`/ecp-api/v3/teacher/homepage-tips/`, async (req, res) => {
  let query = {}
  let sort = {'TIPID': 1}
  try{
    let homepageTipResponse = await EcGetData(EcHomepageTipsCollection, query, sort)
    res.status(200).send(homepageTipResponse).end()
  }catch(err){
    res.status(400).send(err).end()
  }
})

EcHomepageTipsRouter.get(`/ecp-api/v3/teacher/homepage-tips/:lang/`, async (req, res) => {
  let query = {'LANGUAGE': req.params.lang}
  let sort = {'TIPID': 1}
  try{
    let homepageTipResponse = await EcGetData(EcHomepageTipsCollection, query, sort)
    res.status(200).send(homepageTipResponse).end()
  }catch(err){
    res.status(400).send(err).end()
  }
})

module.exports = EcHomepageTipsRouter