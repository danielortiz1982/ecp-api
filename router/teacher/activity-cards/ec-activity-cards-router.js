const express                     = require('express')
const EcActivityCardsRouter       = new express.Router()
const {EcGetData}                 = require('../../../utilities/db/ec-get-data')
const EcActivityCardsCollection   = 'ecactivitycards'
const endpoint                    = {componentURL: 'activity-cards', langURL: 'lang', moduleURL: 'module', weekURL: 'week', themeID: 'theme'}

EcActivityCardsRouter.get(`/ecp-api/v3/teacher/${endpoint.componentURL}/`, async (req, res) => {
  let query = {}
  try{
    let activityCardResponse = await EcGetData(EcActivityCardsCollection, query)
    res.status(200).send(activityCardResponse).end()
  }catch(err){
    res.status(400).send(err).end()
  }
})

EcActivityCardsRouter.get(`/ecp-api/v3/teacher/${endpoint.componentURL}/:${endpoint.langURL}/`, async (req, res)=>{
  let query = {
    'elements': {
      $elemMatch: {
        'attributes.lang': req.params.lang
      }
    }
  }
  try{
    let activityCardResponse = await EcGetData(EcActivityCardsCollection, query)
    res.status(200).send(activityCardResponse).end()
  }catch(err){
    res.status(400).send(err).end()
  }

})

EcActivityCardsRouter.get(`/ecp-api/v3/teacher/${endpoint.componentURL}/:${endpoint.langURL}/:${endpoint.moduleURL}/`, async (req, res)=>{

  let query = {
    'elements': {
      $elemMatch: {
        'attributes.lang': req.params.lang,
        'attributes.module': req.params.module
      }
    },
  }
  try{
    let activityCardResponse = await EcGetData(EcActivityCardsCollection, query)
    res.status(200).send(activityCardResponse).end()
  }catch(err){
    res.status(400).send(err).end()
  }
})

EcActivityCardsRouter.get(`/ecp-api/v3/teacher/${endpoint.componentURL}/:${endpoint.langURL}/:${endpoint.moduleURL}/:${endpoint.weekURL}/`, async (req, res)=>{

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
    let activityCardResponse = await EcGetData(EcActivityCardsCollection, query)
    res.status(200).send(activityCardResponse).end()
  }catch(err){
    res.status(400).send(err).end()
  }
})

EcActivityCardsRouter.get(`/ecp-api/v3/teacher/${endpoint.componentURL}/:${endpoint.langURL}/:${endpoint.moduleURL}/:${endpoint.weekURL}/:${endpoint.themeID}/`, async (req, res)=>{
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
    let activityCardResponse = await EcGetData(EcActivityCardsCollection, query)
    res.status(200).send(activityCardResponse).end()
  }catch(err){
    res.status(400).send(err).end()
  }
})

module.exports = EcActivityCardsRouter
