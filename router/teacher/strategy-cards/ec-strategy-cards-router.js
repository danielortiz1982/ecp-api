const express                        = require('express')
const EcStrategyCardsRouter          = new express.Router()
const {EcGetData}                    = require('../../../utilities/db/ec-get-data')
const EcStrategyCardsCollection      = 'ecstrategycardsmodel'
const endpoint                       = {componentURL: 'strategy-cards', langURL: 'lang', moduleURL: 'module', weekURL: 'week', themeID: 'theme'}

EcStrategyCardsRouter.get(`/ecp-api/v3/teacher/${endpoint.componentURL}/`, async (req, res) => {
    let query = {}
    try{
      let strategyCardsResponse = await EcGetData(EcStrategyCardsCollection, query)
      res.status(200).send(strategyCardsResponse).end()
    }catch(err){
      res.status(400).send(err).end()
    }
  })

  EcStrategyCardsRouter.get(`/ecp-api/v3/teacher/${endpoint.componentURL}/:${endpoint.langURL}/`, async (req, res)=>{
    let query = {
      'elements': {
        $elemMatch: {
          'attributes.lang': req.params.lang
        }
      }
    }
    try{
      let strategyCardsResponse = await EcGetData(EcStrategyCardsCollection, query)
      res.status(200).send(strategyCardsResponse).end()
    }catch(err){
      res.status(400).send(err).end()
    }
  })

  module.exports = EcStrategyCardsRouter