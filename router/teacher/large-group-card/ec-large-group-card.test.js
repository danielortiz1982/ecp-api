const request   = require("supertest")
const app       = require('../../../app')

describe('Testing for large group card component', () => {

    test('LGC data is Application/JSON', done => {
        request(app)
            .get('/ecp-api/v3/teacher/large-group-card')
            .expect('Content-Type', /json/)
            done()
    })

    test('Return all LGC', async done => {
        let response = await request(app).get('/ecp-api/v3/teacher/large-group-card')
        expect(response.statusCode).toBe(200)
        done()
    })

    test('Return LGC by language EN', async done => {
        let response = await request(app).get('/ecp-api/v3/teacher/large-group-card/en')
        expect(response.statusCode).toBe(200)
        done()
    })

    test('Return LGC by language ES', async done => {
        let response = await request(app).get('/ecp-api/v3/teacher/large-group-card/es')
        expect(response.statusCode).toBe(200)
        done()
    })

    test('Return LGC by language EN and language module', async done => {
        let response = await request(app).get('/ecp-api/v3/teacher/large-group-card/en/language')
        expect(response.statusCode).toBe(200)
        done()
    })

    test('Return LGC by language ES and language module', async done => {
        let response = await request(app).get('/ecp-api/v3/teacher/large-group-card/es/language')
        expect(response.statusCode).toBe(200)
        done()
    })

    test('Return LGC by language EN and math module', async done => {
        let response = await request(app).get('/ecp-api/v3/teacher/large-group-card/en/math')
        expect(response.statusCode).toBe(200)
        done()
    })

    test('Return LGC by language ES and math module', async done => {
        let response = await request(app).get('/ecp-api/v3/teacher/large-group-card/es/math')
        expect(response.statusCode).toBe(200)
        done()
    })

    test('Return LGC by language EN and literacy module', async done => {
        let response = await request(app).get('/ecp-api/v3/teacher/large-group-card/en/literature')
        expect(response.statusCode).toBe(200)
        done()
    })

    test('Return LGC by language ES and literacy module', async done => {
        let response = await request(app).get('/ecp-api/v3/teacher/large-group-card/es/literature')
        expect(response.statusCode).toBe(200)
        done()
    })

    test('Return LGC by language ES and literacy module week 1', async done => {
        let response = await request(app).get('/ecp-api/v3/teacher/large-group-card/es/literature/week_001')
        expect(response.statusCode).toBe(200)
        done()
    })

    test('Return LGC by language ES and literacy module week 1 theme 1', async done => {
        let response = await request(app).get('/ecp-api/v3/teacher/large-group-card/es/literature/week_001/theme_001')
        expect(response.statusCode).toBe(200)
        done()
    })

})