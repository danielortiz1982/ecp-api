const express                   = require('express')
const EcpStudentRouter          = new express.Router()
const EcStudentCollection       = 'ec_student'
const {EcGetData, EcGetSingle}  = require('../../utilities/db/ec-get-data')
const {EcPostApi}               = require('../../utilities/db/ec-post-data')

EcpStudentRouter.post('/ecp-api/v3/student/collections/post', async (req, res)=>{
  const response = await EcPostApi(EcStudentCollection, req.body)
  res.send(response.ops).status(201).end()
})

EcpStudentRouter.get(`/ecp-api/v3/student/collections`, async (req, res) => {
    let query = {}
    try{
      let studentResponse = await EcGetData(EcStudentCollection, query)
      res.status(200).send(studentResponse).end()
    }catch(err){
      res.status(400).send(err).end()
    }
})

EcpStudentRouter.get(`/ecp-api/v3/student/collection/:id`, async (req, res) => {
    let query = {
        '_id': req.params.id
    }
    try{
      let studentResponse = await EcGetSingle(EcStudentCollection, query)
      res.status(200).send(studentResponse).end()
    }catch(err){
      res.status(400).send(err).end()
    }
})

EcpStudentRouter.get(`/ecp-api/v3/student/collection/language/:lang`, async (req, res) => {
    let query = {
        'language': req.params.lang
    }
    try{
      let studentResponse = await EcGetSingle(EcStudentCollection, query)
      res.status(200).send(studentResponse).end()

    }catch(err){
      res.status(400).send(err).end()
    }
})

module.exports = EcpStudentRouter