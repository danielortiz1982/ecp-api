const request   = require("supertest")
const app       = require('../../../app')

describe('Testing for flip charts component', ()=>{

    test('Flip chart data is Application/JSON', done => {
        request(app)
            .get('/ecp-api/v3/teacher/flip-charts')
            .expect('Content-Type', /json/)
            done()
    })

    test('Return all flip charts', async done => {
        let response = await request(app).get('/ecp-api/v3/teacher/flip-charts')
        expect(response.statusCode).toBe(200)
        done()
    })

    test('Return all flip charts by language EN', async done => {
        let response = await request(app).get('/ecp-api/v3/teacher/flip-charts/en')
        expect(response.statusCode).toBe(200)
        done()
    })

    test('Return all flip charts by language ES', async done => {
        let response = await request(app).get('/ecp-api/v3/teacher/flip-charts/es')
        expect(response.statusCode).toBe(200)
        done()
    })

    test('Return flip chart by language EN and week 1', async done => {
        let response = await request(app).get('/ecp-api/v3/teacher/flip-charts/en/week_001')
        expect(response.statusCode).toBe(200)
        done()
    })

    test('Return flip chart by language EN, week 1 and theme 1', async done => {
        let response = await request(app).get('/ecp-api/v3/teacher/flip-charts/en/week_001/theme_001')
        expect(response.statusCode).toBe(200)
        done()
    })

})