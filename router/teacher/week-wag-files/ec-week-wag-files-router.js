const express                       = require('express')
const EcWeekWagFilesRouter          = new express.Router()
const {EcGetData}                   = require('../../../utilities/db/ec-get-data')
const EcWeekWagFilesCollection      = 'ec_week_wag_files'

EcWeekWagFilesRouter.get(`/ecp-api/v3/teacher/week-wag-files/`, async (req, res) => {
  let query = {}
  let sort = {'WEEKID': 1, 'SEQUENCE': 1}
  try{
    let weekWagFilesResponse = await EcGetData(EcWeekWagFilesCollection, query, sort)
    res.status(200).send(weekWagFilesResponse).end()
  }catch(err){
    res.status(400).send(err).end()
  }
})

EcWeekWagFilesRouter.get(`/ecp-api/v3/teacher/week-wag-files/:lang/`, async (req, res) => {
  let query = {'Language': req.params.lang}
  let sort = {'WEEKID': 1, 'SEQUENCE': 1}
  try{
    let weekWagFilesResponse = await EcGetData(EcWeekWagFilesCollection, query, sort)
    res.status(200).send(weekWagFilesResponse).end()
  }catch(err){
    res.status(400).send(err).end()
  }
})

EcWeekWagFilesRouter.get(`/ecp-api/v3/teacher/week-wag-files/:lang/:week/`, async (req, res) => {
  let query = {'Language': req.params.lang, 'WEEKID': req.params.week}
  let sort = {'WEEKID': 1, 'SEQUENCE': 1}
  try{
    let weekWagFilesResponse = await EcGetData(EcWeekWagFilesCollection, query, sort)
    res.status(200).send(weekWagFilesResponse).end()
  }catch(err){
    res.status(400).send(err).end()
  }
})

EcWeekWagFilesRouter.get(`/ecp-api/v3/teacher/week-wag-files/:lang/:week/:module/`, async (req, res) => {
  let query = {'Language': req.params.lang, 'WEEKID': req.params.week, 'MODULEID': req.params.module}
  let sort = {'WEEKID': 1, 'SEQUENCE': 1}
  try{
    let weekWagFilesResponse = await EcGetData(EcWeekWagFilesCollection, query, sort)
    res.status(200).send(weekWagFilesResponse).end()
  }catch(err){
    res.status(400).send(err).end()
  }
})

module.exports = EcWeekWagFilesRouter