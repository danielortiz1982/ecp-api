const express                        = require('express')
const EcAlphabetCardsRouter          = new express.Router()
const {EcGetData}                    = require('../../../utilities/db/ec-get-data')
const EcAlphabetCardsCollection      = 'ecalphabetcardsmodel'
const endpoint                       = {componentURL: 'alphabet-cards', langURL: 'lang', moduleURL: 'module', weekURL: 'week', themeID: 'theme'}

EcAlphabetCardsRouter.get(`/ecp-api/v3/teacher/${endpoint.componentURL}/`, async (req, res) => {
  let query = {}
  try{
    let alphabetCardsResponse = await EcGetData(EcAlphabetCardsCollection, query)
    res.status(200).send(alphabetCardsResponse).end()
  }catch(err){
    res.status(400).send(err).end()
  }
})

EcAlphabetCardsRouter.get(`/ecp-api/v3/teacher/${endpoint.componentURL}/:${endpoint.langURL}/`, async (req, res)=>{
  let query = {
    'elements': {
      $elemMatch: {
        'attributes.lang': req.params.lang
      }
    }
  }
  try{
    let alphabetCardsResponse = await EcGetData(EcAlphabetCardsCollection, query)
    res.status(200).send(alphabetCardsResponse).end()
  }catch(err){
    res.status(400).send(err).end()
  }
})

EcAlphabetCardsRouter.get(`/ecp-api/v3/teacher/${endpoint.componentURL}/:${endpoint.langURL}/:${endpoint.moduleURL}/`, async (req, res)=>{
  let query = {
    'elements': {
      $elemMatch: {
        'attributes.lang': req.params.lang,
        'attributes.module': req.params.module
      }
    },
  }
  try{
    let alphabetCardsResponse = await EcGetData(EcAlphabetCardsCollection, query)
    res.status(200).send(alphabetCardsResponse).end()
  }catch(err){
    res.status(400).send(err).end()
  }
})

EcAlphabetCardsRouter.get(`/ecp-api/v3/teacher/${endpoint.componentURL}/:${endpoint.langURL}/:${endpoint.moduleURL}/:${endpoint.weekURL}/`, async (req, res)=>{
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
    let alphabetCardsResponse = await EcGetData(EcAlphabetCardsCollection, query)
    res.status(200).send(alphabetCardsResponse).end()
  }catch(err){
    res.status(400).send(err).end()
  }
})

EcAlphabetCardsRouter.get(`/ecp-api/v3/teacher/${endpoint.componentURL}/:${endpoint.langURL}/:${endpoint.moduleURL}/:${endpoint.weekURL}/:${endpoint.themeID}/`, async (req, res)=>{
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
    let alphabetCardsResponse = await EcGetData(EcAlphabetCardsCollection, query)
    res.status(200).send(alphabetCardsResponse).end()
  }catch(err){
    res.status(400).send(err).end()
  }
})

module.exports = EcAlphabetCardsRouter
