const express                       = require('express')
const EcTeacherGuideRouter          = new express.Router()
const {EcGetData}                   = require('../../../utilities/db/ec-get-data')
const EcTeacherGuideCollection      = 'ecteacherguidemodel'
const endpoint                      = {componentURL: 'teacher-guides', langURL: 'lang', moduleURL: 'module', weekURL: 'week', themeID: 'theme'}

EcTeacherGuideRouter.get(`/ecp-api/v3/teacher/${endpoint.componentURL}/`, async (req, res) => {
  let query = {}
  try{
    let teacherGuidesResponse = await EcGetData(EcTeacherGuideCollection, query)
    res.status(200).send(teacherGuidesResponse).end()
  }catch(err){
    res.status(400).send(err).end()
  }
})

EcTeacherGuideRouter.get(`/ecp-api/v3/teacher/${endpoint.componentURL}/:${endpoint.langURL}/`, async (req, res)=>{
  let query = {
    'elements': {
      $elemMatch: {
        'attributes.lang': req.params.lang
      }
    }
  }
  try{
    let teacherGuidesResponse = await EcGetData(EcTeacherGuideCollection, query)
    res.status(200).send(teacherGuidesResponse).end()
  }catch(err){
    res.status(400).send(err).end()
  }
})

EcTeacherGuideRouter.get(`/ecp-api/v3/teacher/${endpoint.componentURL}/:${endpoint.langURL}/:${endpoint.moduleURL}/`, async (req, res)=>{
  let query = {
    'elements': {
      $elemMatch: {
        'attributes.lang': req.params.lang,
        'attributes.module': req.params.module
      }
    },
  }
  try{
    let teacherGuidesResponse = await EcGetData(EcTeacherGuideCollection, query)
    res.status(200).send(teacherGuidesResponse).end()
  }catch(err){
    res.status(400).send(err).end()
  }
})

EcTeacherGuideRouter.get(`/ecp-api/v3/teacher/${endpoint.componentURL}/:${endpoint.langURL}/:${endpoint.moduleURL}/:${endpoint.weekURL}/`, async (req, res)=>{
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
    let teacherGuidesResponse = await EcGetData(EcTeacherGuideCollection, query)
    res.status(200).send(teacherGuidesResponse).end()
  }catch(err){
    res.status(400).send(err).end()
  }
})

EcTeacherGuideRouter.get(`/ecp-api/v3/teacher/${endpoint.componentURL}/:${endpoint.langURL}/:${endpoint.moduleURL}/:${endpoint.weekURL}/:${endpoint.themeID}/`, async (req, res)=>{
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
    let teacherGuidesResponse = await EcGetData(EcTeacherGuideCollection, query)
    res.status(200).send(teacherGuidesResponse).end()
  }catch(err){
    res.status(400).send(err).end()
  }
})

module.exports = EcTeacherGuideRouter