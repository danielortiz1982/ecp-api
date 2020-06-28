const express                         = require('express')
const EcVocabularyCardRouter          = new express.Router()
const {EcGetData}                     = require('../../../utilities/db/ec-get-data')
const EcVocabularyCardCollection      = 'vocabularycardsmodel'
const endpoint                        = {componentURL: 'vocabulary-cards', langURL: 'lang', moduleURL: 'module', weekURL: 'week', themeID: 'theme'}

EcVocabularyCardRouter.get(`/ecp-api/v3/teacher/${endpoint.componentURL}/`, async (req, res) => {
  let query = {}
  try{
    let vocabularyCardResponse = await EcGetData(EcVocabularyCardCollection, query)
    res.status(200).send(vocabularyCardResponse).end()
  }catch(err){
    res.status(400).send(err).end()
  }
})

EcVocabularyCardRouter.get(`/ecp-api/v3/teacher/${endpoint.componentURL}/:${endpoint.langURL}/`, async (req, res)=>{
  let query = {
    'elements': {
      $elemMatch: {
        'attributes.lang': req.params.lang
      }
    }
  }
  try{
    let vocabularyCardResponse = await EcGetData(EcVocabularyCardCollection, query)
    res.status(200).send(vocabularyCardResponse).end()
  }catch(err){
    res.status(400).send(err).end()
  }
})

EcVocabularyCardRouter.get(`/ecp-api/v3/teacher/${endpoint.componentURL}/:${endpoint.langURL}/:${endpoint.moduleURL}/`, async (req, res)=>{
  let query = {
    'elements': {
      $elemMatch: {
        'attributes.lang': req.params.lang,
        'attributes.module': req.params.module
      }
    },
  }
  try{
    let vocabularyCardResponse = await EcGetData(EcVocabularyCardCollection, query)
    res.status(200).send(vocabularyCardResponse).end()
  }catch(err){
    res.status(400).send(err).end()
  }
})

EcVocabularyCardRouter.get(`/ecp-api/v3/teacher/${endpoint.componentURL}/:${endpoint.langURL}/:${endpoint.moduleURL}/:${endpoint.weekURL}`, async (req, res)=>{
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
    let vocabularyCardResponse = await EcGetData(EcVocabularyCardCollection, query)
    res.status(200).send(vocabularyCardResponse).end()
  }catch(err){
    res.status(400).send(err).end()
  }
})

EcVocabularyCardRouter.get(`/ecp-api/v3/teacher/${endpoint.componentURL}/:${endpoint.langURL}/:${endpoint.moduleURL}/:${endpoint.weekURL}/:${endpoint.themeID}/`, async (req, res)=>{
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
    let vocabularyCardResponse = await EcGetData(EcVocabularyCardCollection, query)
    res.status(200).send(vocabularyCardResponse).end()
  }catch(err){
    res.status(400).send(err).end()
  }
})

EcVocabularyCardRouter.get(`/ecp-api/v3/teacher/${endpoint.componentURL}/:${endpoint.langURL}/:${endpoint.moduleURL}/:${endpoint.weekURL}/:${endpoint.themeID}/:day/`, async (req, res)=>{
  let query = {
    'elements': {
      $elemMatch: {
        'attributes.lang': req.params.lang,
        'attributes.module': req.params.module,
        'attributes.week': req.params.week,
        'attributes.theme': req.params.theme,
        'elements': {
          $elemMatch: {
              'attributes.day': req.params.day
          }
        }
      }
    },
  }
  try{
    let vocabularyCardResponse = await EcGetData(EcVocabularyCardCollection, query)
    res.status(200).send(vocabularyCardResponse).end()
  }catch(err){
    res.status(400).send(err).end()
  }
})

module.exports = EcVocabularyCardRouter
