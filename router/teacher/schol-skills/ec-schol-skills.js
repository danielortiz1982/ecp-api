const express                       = require('express')
const EcScholSkillsRouter           = new express.Router()
const {EcGetData}                   = require('../../../utilities/db/ec-get-data')
const EcScholSkillsCollection       = 'ec_schol_skills'

EcScholSkillsRouter.get(`/ecp-api/v3/teacher/schol-skills/`, async (req, res) => {
  let query = {}
  let sort = {}
  try{
    let scholSillsResponse = await EcGetData(EcScholSkillsCollection, query, sort)
    res.status(200).send(scholSillsResponse).end()
  }catch(err){
    res.status(400).send(err).end()
  }
})

EcScholSkillsRouter.get(`/ecp-api/v3/teacher/schol-skills/:lang/`, async (req, res) => {
  let query = {'LANGUAGE': req.params.lang}
  let sort = {}
  try{
    let scholSillsResponse = await EcGetData(EcScholSkillsCollection, query, sort)
    res.status(200).send(scholSillsResponse).end()
  }catch(err){
    res.status(400).send(err).end()
  }
})

module.exports = EcScholSkillsRouter