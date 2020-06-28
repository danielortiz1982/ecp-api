const express                       = require('express')
const EcWeekModXMLRouter            = new express.Router()
const {EcGetData}                   = require('../../../utilities/db/ec-get-data')
const EcWeekModXMLCollection        = 'ec_week_mod_xml'

EcWeekModXMLRouter.get(`/ecp-api/v3/teacher/week-mod-xml/`, async (req, res) => {
  let query = {}
  let sort = {'MODULEID': 1}
  try{
    let weekModXMLResponse = await EcGetData(EcWeekModXMLCollection, query, sort)
    res.status(200).send(weekModXMLResponse).end()
  }catch(err){
    res.status(400).send(err).end()
  }
})

module.exports = EcWeekModXMLRouter