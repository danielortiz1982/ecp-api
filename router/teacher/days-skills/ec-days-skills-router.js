const express                       = require('express')
const EcDaysSkillsRouter            = new express.Router()
const {EcGetData}                   = require('../../../utilities/db/ec-get-data')
const EcDaysSkillsCollection        = 'ec_days_skills'

EcDaysSkillsRouter.get(`/ecp-api/v3/teacher/days-skills/`, async (req, res) => {
  let query = {}
  let sort = {'PARENTID': 1}
  try{
    let daysSkillsResponse = await EcGetData(EcDaysSkillsCollection, query, sort)
    res.status(200).send(daysSkillsResponse).end()
  }catch(err){
    res.status(400).send(err).end()
  }
})

EcDaysSkillsRouter.get(`/ecp-api/v3/teacher/days-skills/:skillid/`, async (req, res) => {
  let query = {"SKILLID": req.params.skillid}
  let sort = {'PARENTID': 1}
  try{
    let daysSkillsResponse = await EcGetData(EcDaysSkillsCollection, query, sort)
    res.status(200).send(daysSkillsResponse).end()
  }catch(err){
    res.status(400).send(err).end()
  }
})

module.exports = EcDaysSkillsRouter