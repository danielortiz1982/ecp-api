const request   = require("supertest")
const app       = require('../../../app')

describe('Testing for homepage tips component', () => {

    test('Homepage tips data is Application/JSON', done => {
        request(app)
            .get('/ecp-api/v3/teacher/homepage-tips/')
            .expect('Content-Type', /json/)
            done()
    })

    test('Return all homepage tips', async done => {
        let response = await request(app).get('/ecp-api/v3/teacher/homepage-tips/')
        expect(response.statusCode).toBe(200)
        done()
    })

    test('Return homepage tips by language EN', async done => {
        let response = await request(app).get('/ecp-api/v3/teacher/homepage-tips/en')
        expect(response.statusCode).toBe(200)
        done()
    })

    test('Return homepage tips by language ES', async done => {
        let response = await request(app).get('/ecp-api/v3/teacher/homepage-tips/es')
        expect(response.statusCode).toBe(200)
        done()
    })
    
})