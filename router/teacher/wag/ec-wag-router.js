const express                       = require('express')
const EcWagRouter                   = new express.Router()
const {EcGetData}                   = require('../../../utilities/db/ec-get-data')
const EcWagCollection               = 'ecteacherguidemodel'
const endpoint                      = {componentURL: 'wag', langURL: 'lang', moduleURL: 'module', weekURL: 'week', themeID: 'theme'}

EcWagRouter.get(`/ecp-api/v3/teacher/${endpoint.componentURL}/`, async (req, res) => {
    let query = {
        'elements': {
          $elemMatch: {
            'name': 'WAG'
          }
        }
      }
    try{
      let wagResponse = await EcGetData(EcWagCollection, query)
      res.status(200).send(wagResponse).end()
    }catch(err){
      res.status(400).send(err).end()
    }
})

EcWagRouter.get(`/ecp-api/v3/teacher/${endpoint.componentURL}/:lang/`, async (req, res) => {
    let query = {
        'elements': {
          $elemMatch: {
            'name': 'WAG',
            'attributes.lang': req.params.lang
          }
        }
      }
    try{
      let wagResponse = await EcGetData(EcWagCollection, query)
      res.status(200).send(wagResponse).end()
    }catch(err){
      res.status(400).send(err).end()
    }
  })

  EcWagRouter.get(`/ecp-api/v3/teacher/${endpoint.componentURL}/:${endpoint.langURL}/:${endpoint.moduleURL}/`, async (req, res)=>{
    let query = {
      'elements': {
        $elemMatch: {
          'name': 'WAG',
          'attributes.lang': req.params.lang,
          'attributes.module': req.params.module
        }
      },
    }
    try{
      let wagResponse = await EcGetData(EcWagCollection, query)
      res.status(200).send(wagResponse).end()
    }catch(err){
      res.status(400).send(err).end()
    }
  })
  
  EcWagRouter.get(`/ecp-api/v3/teacher/${endpoint.componentURL}/:${endpoint.langURL}/:${endpoint.moduleURL}/:${endpoint.weekURL}/`, async (req, res)=>{
    let query = {
      'elements': {
        $elemMatch: {
          'name': 'WAG',
          'attributes.lang': req.params.lang,
          'attributes.module': req.params.module,
          'attributes.week': req.params.week
        }
      },
    }
    try{
      let wagResponse = await EcGetData(EcWagCollection, query)
      res.status(200).send(wagResponse).end()
    }catch(err){
      res.status(400).send(err).end()
    }
  })
  
  EcWagRouter.get(`/ecp-api/v3/teacher/${endpoint.componentURL}/:${endpoint.langURL}/:${endpoint.moduleURL}/:${endpoint.weekURL}/:${endpoint.themeID}/`, async (req, res)=>{
    let query = {
      'elements': {
        $elemMatch: {
          'name': 'WAG',
          'attributes.lang': req.params.lang,
          'attributes.module': req.params.module,
          'attributes.week': req.params.week,
          'attributes.theme': req.params.theme
        }
      },
    }
    try{
      let wagResponse = await EcGetData(EcWagCollection, query)
      res.status(200).send(wagResponse).end()
    }catch(err){
      res.status(400).send(err).end()
    }
  })

  module.exports = EcWagRouter