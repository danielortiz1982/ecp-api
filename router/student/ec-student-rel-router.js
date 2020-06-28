const express                 = require('express')
const EcStudentRelsRouter        = new express.Router()
const {EcGetData}             = require('../../utilities/db/ec-get-data')
const EcStudentRelsCollection    = 'ec_student_rels'

EcStudentRelsRouter.get(`/ecp-api/v3/student/rels`, async (req, res) => {
  let query = {}
  try{
    let studentRelsResponse = await EcGetData(EcStudentRelsCollection, query)
    res.status(200).send(studentRelsResponse).end()
  }catch(err){
    res.status(400).send(err).end()
  }
})

EcStudentRelsRouter.get(`/ecp-api/v3/student/rels/:lang`, async (req, res) => {
    let query = {
        'language': req.params.lang
    }
    try{
      let studentRelsResponse = await EcGetData(EcStudentRelsCollection, query)
      res.status(200).send(studentRelsResponse).end()
    }catch(err){
      res.status(400).send(err).end()
    }
})

module.exports = EcStudentRelsRouter

