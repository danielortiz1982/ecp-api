const request   = require("supertest")
const app       = require('../../../app')

describe('Testing for Audio Resources component', ()=>{

    test('Audio Res data is Application/JSON', done => {
        request(app)
            .get('/ecp-api/v3/teacher/audio-res/')
            .expect('Content-Type', /json/)
            done()
    })

    test('Return all Audio Resources', async done => {
        let response = await request(app).get('/ecp-api/v3/teacher/audio-res/')
        expect(response.statusCode).toBe(200)
        done()
    })

    test('Return Audio Resources by language EN', async done => {
        let response = await request(app).get('/ecp-api/v3/teacher/audio-res/en')
        expect(response.statusCode).toBe(200)
        done()
    })

    test('Return Audio Resources by language ES', async done => {
        let response = await request(app).get('/ecp-api/v3/teacher/audio-res/es')
        expect(response.statusCode).toBe(200)
        done()
    })

})