const express                     = require('express')
const EcFlipChartsRouter          = new express.Router()
const EcFlipChartsCollection      = 'ecflipchartsmodel'
const {EcGetData}                 = require('../../../utilities/db/ec-get-data')
const endpoint                    = {componentURL: 'flip-charts', langURL: 'lang', moduleURL: 'module', weekURL: 'week', themeID: 'theme'}

EcFlipChartsRouter.get(`/ecp-api/v3/teacher/${endpoint.componentURL}/`, async (req, res) => {
  let query = {}
  try{
    let flipChartResponse = await EcGetData(EcFlipChartsCollection, query)
    res.status(200).send(flipChartResponse).end()
  }catch(err){
    console.error(err)
    res.status(400).send(err).end()
  }
})

EcFlipChartsRouter.get(`/ecp-api/v3/teacher/${endpoint.componentURL}/:${endpoint.langURL}/`, async (req, res)=>{
  let query = {
    'elements': {
      $elemMatch: {
        'attributes.lang': req.params.lang
      }
    }
  }
  try{
    let flipChartResponse = await EcGetData(EcFlipChartsCollection, query)
    res.status(200).send(flipChartResponse).end()
  }catch(err){
    console.error(err)
    res.status(400).send(err).end()
  }
})

EcFlipChartsRouter.get(`/ecp-api/v3/teacher/${endpoint.componentURL}/:${endpoint.langURL}/:${endpoint.weekURL}/`, async (req, res)=>{
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
    let flipChartResponse = await EcGetData(EcFlipChartsCollection, query)
    res.status(200).send(flipChartResponse).end()
  }catch(err){
    console.error(err)
    res.status(400).send(err).end()
  }
})

EcFlipChartsRouter.get(`/ecp-api/v3/teacher/${endpoint.componentURL}/:${endpoint.langURL}/:${endpoint.weekURL}/:${endpoint.themeID}/`, async (req, res)=>{
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
    let flipChartResponse = await EcGetData(EcFlipChartsCollection, query)
    res.status(200).send(flipChartResponse).end()
  }catch(err){
    console.error(err)
    res.status(400).send(err).end()
  }
})

module.exports = EcFlipChartsRouter