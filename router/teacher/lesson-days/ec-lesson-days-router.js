const express                       = require('express')
const EcLessonDaysRouter            = new express.Router()
const {EcGetData}                   = require('../../../utilities/db/ec-get-data')
const EcLessonDaysCollection        = 'ec_lessondays'

EcLessonDaysRouter.get(`/ecp-api/v3/teacher/lesson-days/`, async (req, res) => {
  let query = {}
  let sort = {'MODULEID': 1, 'LESSONDAYID': 1, 'WEEKID': 1}
  try{
    let lessonDaysResponse = await EcGetData(EcLessonDaysCollection, query, sort)
    res.status(200).send(lessonDaysResponse).end()
  }catch(err){
    res.status(400).send(err).end()
  }
})

EcLessonDaysRouter.get(`/ecp-api/v3/teacher/lesson-days/:lang/`, async (req, res) => {
  let query = {'LANGUAGE': req.params.lang}
  let sort = {'MODULEID': 1, 'LESSONDAYID': 1, 'WEEKID': 1}
  try{
    let lessonDaysResponse = await EcGetData(EcLessonDaysCollection, query, sort)
    res.status(200).send(lessonDaysResponse).end()
  }catch(err){
    res.status(400).send(err).end()
  }
})

EcLessonDaysRouter.get(`/ecp-api/v3/teacher/lesson-days/:lang/:lessondayid/`, async (req, res) => {
  let query = {'LANGUAGE': req.params.lang, 'LESSONDAYID': req.params.lessondayid}
  let sort = {'MODULEID': 1, 'LESSONDAYID': 1, 'WEEKID': 1}
  try{
    let lessonDaysResponse = await EcGetData(EcLessonDaysCollection, query, sort)
    res.status(200).send(lessonDaysResponse).end()
  }catch(err){
    res.status(400).send(err).end()
  }
})

EcLessonDaysRouter.get(`/ecp-api/v3/teacher/lesson-days/:lang/:weekid/:daynumber/`, async (req, res) => {
  let query = {'LANGUAGE': req.params.lang, 'WEEKID': req.params.weekid, 'DAYNUMBER': req.params.daynumber}
  let sort = {'MODULEID': 1, 'LESSONDAYID': 1, 'WEEKID': 1}
  try{
    let lessonDaysResponse = await EcGetData(EcLessonDaysCollection, query, sort)
    res.status(200).send(lessonDaysResponse).end()
  }catch(err){
    res.status(400).send(err).end()
  }
})

module.exports = EcLessonDaysRouter