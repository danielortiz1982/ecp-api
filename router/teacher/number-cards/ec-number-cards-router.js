const express                      = require('express')
const EcNumberCardsRouter          = new express.Router()
const {EcGetData}                  = require('../../../utilities/db/ec-get-data')
const EcNumberCardsCollection      = 'ecnumbercardsmodel'
const endpoint                     = {componentURL: 'number-cards', langURL: 'lang', moduleURL: 'module', weekURL: 'week', themeID: 'theme'}

EcNumberCardsRouter.get(`/ecp-api/v3/teacher/${endpoint.componentURL}/`, async (req, res) => {
    let query = {}
    try{
      let numberCardsResponse = await EcGetData(EcNumberCardsCollection, query)
      res.status(200).send(numberCardsResponse).end()
    }catch(err){
      res.status(400).send(err).end()
    }
  })

  EcNumberCardsRouter.get(`/ecp-api/v3/teacher/${endpoint.componentURL}/:${endpoint.langURL}/`, async (req, res)=>{
    let query = {
      'elements': {
        $elemMatch: {
          'attributes.lang': req.params.lang
        }
      }
    }
    try{
      let numberCardsResponse = await EcGetData(EcNumberCardsCollection, query)
      res.status(200).send(numberCardsResponse).end()
    }catch(err){
      res.status(400).send(err).end()
    }
  })

  module.exports = EcNumberCardsRouter