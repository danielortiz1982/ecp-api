const express                       = require('express')
const EcStateSkillsRouter           = new express.Router()
const {EcGetData}                   = require('../../../utilities/db/ec-get-data')
const EcStateSkillsCollection       = 'ec_state_skills'

EcStateSkillsRouter.get(`/ecp-api/v3/teacher/state-skills/`, async (req, res) => {
  let query = {}
  let sort = {}
  try{
    let stateSkillsResponse = await EcGetData(EcStateSkillsCollection, query, sort)
    res.status(200).send(stateSkillsResponse).end()
  }catch(err){
    res.status(400).send(err).end()
  }
})

EcStateSkillsRouter.get(`/ecp-api/v3/teacher/state-skills/:lang/`, async (req, res) => {
  let query = {
    'LANGUAGE': req.params.lang
  }
  try{
    let stateSkillsResponse = await EcGetData(EcStateSkillsCollection, query)
    res.status(200).send(stateSkillsResponse).end()
  }catch(err){
    res.status(400).send(err).end()
  }
})

EcStateSkillsRouter.get(`/ecp-api/v3/teacher/state-skills/:lang/:domain/`, async (req, res) => {
  let query = {'LANGUAGE': req.params.lang, "SkillHierStateDomainseq": req.params.domain}
  let sort = {}
  try{
    let stateSkillsResponse = await EcGetData(EcStateSkillsCollection, query, sort)
    res.status(200).send(stateSkillsResponse).end()
  }catch(err){
    res.status(400).send(err).end()
  }
})

EcStateSkillsRouter.get(`/ecp-api/v3/teacher/state-skills/:lang/:domain/:category/`, async (req, res) => {
  let query = {'LANGUAGE': req.params.lang, "SkillHierStateDomainseq": req.params.domain, "SkillHierStateCategoryseq": req.params.category}
  let sort = {}
  try{
    let stateSkillsResponse = await EcGetData(EcStateSkillsCollection, query, sort)
    res.status(200).send(stateSkillsResponse).end()
  }catch(err){
    res.status(400).send(err).end()
  }
})

module.exports = EcStateSkillsRouter