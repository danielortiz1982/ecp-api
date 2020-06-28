const express                       = require('express')
const EcThemesRouter                = new express.Router()
const {EcGetData}                   = require('../../../utilities/db/ec-get-data')
const EcThemesCollection            = 'ec_themes'

EcThemesRouter.get(`/ecp-api/v3/teacher/themes/`, async (req, res) => {
  let query = {}
  let sort = {'THEMEID': 1, 'THEMENUMBER': 1}
  try{
    let themesResponse = await EcGetData(EcThemesCollection, query, sort)
    res.status(200).send(themesResponse).end()
  }catch(err){
    res.status(400).send(err).end()
  }
})

EcThemesRouter.get(`/ecp-api/v3/teacher/themes/:lang/`, async (req, res) => {
  let query = {'LANGUAGE': req.params.lang}
  let sort = {'THEMEID': 1, 'THEMENUMBER': 1}
  try{
    let themesResponse = await EcGetData(EcThemesCollection, query, sort)
    res.status(200).send(themesResponse).end()
  }catch(err){
    res.status(400).send(err).end()
  }
})

module.exports = EcThemesRouter