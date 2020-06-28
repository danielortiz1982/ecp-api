const express                       = require('express')
const EcTeacherCardsRouter          = new express.Router()
const {EcGetData}                   = require('../../../utilities/db/ec-get-data')
const EcTeacherCardsCollection      = 'ecteachercardsmodel'
const endpoint                      = {componentURL: 'teacher-cards', langURL: 'lang', moduleURL: 'module', weekURL: 'week', themeID: 'theme'}

EcTeacherCardsRouter.get(`/ecp-api/v3/teacher/${endpoint.componentURL}/`, async (req, res) => {
  let query = {}
  try{
    let teacherCardsResponse = await EcGetData(EcTeacherCardsCollection, query)
    res.status(200).send(teacherCardsResponse).end()
  }catch(err){
    res.status(400).send(err).end()
  }
})

EcTeacherCardsRouter.get(`/ecp-api/v3/teacher/${endpoint.componentURL}/:${endpoint.langURL}/`, async (req, res)=>{
  let query = {
    'elements': {
      $elemMatch: {
        'attributes.lang': req.params.lang
      }
    }
  }
  try{
    let teacherCardsResponse = await EcGetData(EcTeacherCardsCollection, query)
    res.status(200).send(teacherCardsResponse).end()
  }catch(err){
    res.status(400).send(err).end()
  }
})

EcTeacherCardsRouter.get(`/ecp-api/v3/teacher/${endpoint.componentURL}/:${endpoint.langURL}/:${endpoint.moduleURL}/`, async (req, res)=>{
  let query = {
    'elements': {
      $elemMatch: {
        'attributes.lang': req.params.lang,
        'attributes.module': req.params.module
      }
    },
  }
  try{
    let teacherCardsResponse = await EcGetData(EcTeacherCardsCollection, query)
    res.status(200).send(teacherCardsResponse).end()
  }catch(err){
    res.status(400).send(err).end()
  }
})

EcTeacherCardsRouter.get(`/ecp-api/v3/teacher/${endpoint.componentURL}/:${endpoint.langURL}/:${endpoint.moduleURL}/:${endpoint.weekURL}/`, async (req, res)=>{
  let query = {
    'elements': {
      $elemMatch: {
        'attributes.lang': req.params.lang,
        'attributes.module': req.params.module,
        'attributes.week': req.params.week
      }
    },
  }
  try{
    let teacherCardsResponse = await EcGetData(EcTeacherCardsCollection, query)
    res.status(200).send(teacherCardsResponse).end()
  }catch(err){
    res.status(400).send(err).end()
  }
})

EcTeacherCardsRouter.get(`/ecp-api/v3/teacher/${endpoint.componentURL}/:${endpoint.langURL}/:${endpoint.moduleURL}/:${endpoint.weekURL}/:${endpoint.themeID}/`, async (req, res)=>{
  let query = {
    'elements': {
      $elemMatch: {
        'attributes.lang': req.params.lang,
        'attributes.module': req.params.module,
        'attributes.week': req.params.week,
        'attributes.theme': req.params.theme
      }
    },
  }
  try{
    let teacherCardsResponse = await EcGetData(EcTeacherCardsCollection, query)
    res.status(200).send(teacherCardsResponse).end()
  }catch(err){
    res.status(400).send(err).end()
  }
})

module.exports = EcTeacherCardsRouter