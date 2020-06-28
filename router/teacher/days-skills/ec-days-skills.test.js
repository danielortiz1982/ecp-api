const request   = require("supertest")
const app       = require('../../../app')

describe('Testing for days skills component', () => {

    test('Days skills data is Application/JSON', done =>{
        request(app)
            .get('/ecp-api/v3/teacher/days-skills/')
            .expect('Content-Type', /json/)
            done()
    })

    test('Return all days skills', async done => {
        let response = await request(app).get('/ecp-api/v3/teacher/days-skills/')
        expect(response.statusCode).toBe(200)
        done()
    })

    test('Return days skills by ID', async done =>{
        let response = await request(app).get('/ecp-api/v3/teacher/days-skills/STSKILL_0026')
        expect(response.statusCode).toBe(200)
        done()
    })

})