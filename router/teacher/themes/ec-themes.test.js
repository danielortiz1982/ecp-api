const request   = require("supertest")
const app       = require('../../../app')

describe('Testing for Themes component', ()=>{

    test('Themes data is Application/JSON', done => {
        request(app)
            .get('/ecp-api/v3/teacher/themes/')
            .expect('Content-Type', /json/)
            done()
    })

    test('Return all Themes', async done => {
        let response = await request(app).get('/ecp-api/v3/teacher/themes/')
        expect(response.statusCode).toBe(200)
        done()
    })

    test('Return Themes by language EN', async done => {
        let response = await request(app).get('/ecp-api/v3/teacher/themes/en')
        expect(response.statusCode).toBe(200)
        done()
    })

    test('Return Themes by language ES', async done => {
        let response = await request(app).get('/ecp-api/v3/teacher/themes/es')
        expect(response.statusCode).toBe(200)
        done()
    })

})