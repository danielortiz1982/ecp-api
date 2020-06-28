const express                   = require('express')
const EcWeeksRouter             = new express.Router()
const {EcGetData}               = require('../../../utilities/db/ec-get-data')
const EcWeeksCollection         = 'ec_weeks'

EcWeeksRouter.get(`/ecp-api/v3/teacher/weeks/`, async (req, res) => {
    let query = {}
    let sort = {'THEMEID': 1, 'WEEKID': 1, 'ThemeTHEMENUMBER': 1}
    try{
      let weeksResResponse = await EcGetData(EcWeeksCollection, query, sort)
      res.status(200).send(weeksResResponse).end()
    }catch(err){
      res.status(400).send(err).end()
    }
})

EcWeeksRouter.get(`/ecp-api/v3/teacher/weeks/:lang/`, async (req, res) => {
  let query = {'LANGUAGE': req.params.lang}
  let sort = {'THEMEID': 1, 'WEEKID': 1, 'ThemeTHEMENUMBER': 1}
  try{
    let weeksResResponse = await EcGetData(EcWeeksCollection, query, sort)
    res.status(200).send(weeksResResponse).end()
  }catch(err){
    res.status(400).send(err).end()
  }
})

module.exports = EcWeeksRouter