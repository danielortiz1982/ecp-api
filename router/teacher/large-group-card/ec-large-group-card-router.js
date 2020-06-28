const express                         = require('express')
const EcLargeGroupCardRouter          = new express.Router()
const {EcGetData}                     = require('../../../utilities/db/ec-get-data')
const EcLargeGroupCardCollection      = 'eclargegruopcardmodel'
const endpoint                        = {componentURL: 'large-group-card', langURL: 'lang', moduleURL: 'module', weekURL: 'week', themeID: 'theme'}

EcLargeGroupCardRouter.get(`/ecp-api/v3/teacher/${endpoint.componentURL}/`, async (req, res) => {
  let query = {}
  try{
    let largeGroupCardResponse = await EcGetData(EcLargeGroupCardCollection, query)
    res.status(200).send(largeGroupCardResponse).end()
  }catch(err){
    res.status(400).send(err).end()
  }
})

EcLargeGroupCardRouter.get(`/ecp-api/v3/teacher/${endpoint.componentURL}/:${endpoint.langURL}/`, async (req, res)=>{
  let query = {
    'elements': {
      $elemMatch: {
        'attributes.lang': req.params.lang
      }
    }
  }
  try{
    let largeGroupCardResponse = await EcGetData(EcLargeGroupCardCollection, query)
    res.status(200).send(largeGroupCardResponse).end()
  }catch(err){
    res.status(400).send(err).end()
  }
})

EcLargeGroupCardRouter.get(`/ecp-api/v3/teacher/${endpoint.componentURL}/:${endpoint.langURL}/:${endpoint.moduleURL}/`, async (req, res)=>{
  let query = {
    'elements': {
      $elemMatch: {
        'attributes.lang': req.params.lang,
        'attributes.module': req.params.module
      }
    },
  }
  try{
    let largeGroupCardResponse = await EcGetData(EcLargeGroupCardCollection, query)
    res.status(200).send(largeGroupCardResponse).end()
  }catch(err){
    res.status(400).send(err).end()
  }
})

EcLargeGroupCardRouter.get(`/ecp-api/v3/teacher/${endpoint.componentURL}/:${endpoint.langURL}/:${endpoint.moduleURL}/:${endpoint.weekURL}/`, async (req, res)=>{
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
    let largeGroupCardResponse = await EcGetData(EcLargeGroupCardCollection, query)
    res.status(200).send(largeGroupCardResponse).end()
  }catch(err){
    res.status(400).send(err).end()
  }
})

EcLargeGroupCardRouter.get(`/ecp-api/v3/teacher/${endpoint.componentURL}/:${endpoint.langURL}/:${endpoint.moduleURL}/:${endpoint.weekURL}/:${endpoint.themeID}/`, async (req, res)=>{
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
    let largeGroupCardResponse = await EcGetData(EcLargeGroupCardCollection, query)
    res.status(200).send(largeGroupCardResponse).end()
  }catch(err){
    res.status(400).send(err).end()
  }
})

module.exports = EcLargeGroupCardRouter