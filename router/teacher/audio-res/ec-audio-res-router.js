const express                 = require('express')
const EcAudioResRouter        = new express.Router()
const {EcGetData}             = require('../../../utilities/db/ec-get-data')
const EcAudioResCollection    = 'ec_audio_res'

EcAudioResRouter.get(`/ecp-api/v3/teacher/audio-res/`, async (req, res) => {
  let query = {}
  let sort = {'RESID': 1}
  try{
    let audioResResponse = await EcGetData(EcAudioResCollection, query, sort)
    res.status(200).send(audioResResponse).end()
  }catch(err){
    res.status(400).send(err).end()
  }
})

EcAudioResRouter.get(`/ecp-api/v3/teacher/audio-res/:lang/`, async (req, res) => {
  let query = {'LANGUAGE': req.params.lang}
  let sort = {'RESID': 1}
  try{
    let audioResResponse = await EcGetData(EcAudioResCollection, query, sort)
    res.status(200).send(audioResResponse).end()
  }catch(err){
    res.status(400).send(err).end()
  }
})

module.exports = EcAudioResRouter