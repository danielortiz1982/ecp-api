const request   = require("supertest")
const app       = require('../../../app')

describe('Testing for state skills component', () => {

    test('State skills data is Application/JSON', done => {
        request(app)
            .get('/ecp-api/v3/teacher/state-skills/')
            .expect('Content-Type', /json/)
            done()
    })

    test('Return all state skills', async done => {
        let response = await request(app).get('/ecp-api/v3/teacher/state-skills/')
        expect(response.statusCode).toBe(200)
        done()
    })

    test('Return all state skills by language EN', async done => {
        let response = await request(app).get('/ecp-api/v3/teacher/state-skills/en')
        expect(response.statusCode).toBe(200)
        done()
    })

    test('Return all state skills by language ES', async done => {
        let response = await request(app).get('/ecp-api/v3/teacher/state-skills/es')
        expect(response.statusCode).toBe(200)
        done()
    })

    test('Return all state skills by language EN and domain', async done => {
        let response = await request(app).get('/ecp-api/v3/teacher/state-skills/en/9')
        expect(response.statusCode).toBe(200)
        done()
    })

    test('Return all state skills by language EN, domain and category', async done => {
        let response = await request(app).get('/ecp-api/v3/teacher/state-skills/en/9/1')
        expect(response.statusCode).toBe(200)
        done()
    })
})