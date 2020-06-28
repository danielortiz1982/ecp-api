const request   = require("supertest")
const app       = require('../../../app')

describe('Testing for Audio Resources component', () => {

    test('Lesson days data is Application/JSON', done => {
        request(app)
            .get('/ecp-api/v3/teacher/lesson-days/')
            .expect('Content-Type', /json/)
            done()
    })

    test('Return all lesson days', async done => {
        let response = await request(app).get('/ecp-api/v3/teacher/lesson-days/')
        expect(response.statusCode).toBe(200)
        done()
    })

    test('Return all lesson days by language EN', async done => {
        let response = await request(app).get('/ecp-api/v3/teacher/lesson-days/en')
        expect(response.statusCode).toBe(200)
        done()
    })

    test('Return all lesson days by language ES', async done => {
        let response = await request(app).get('/ecp-api/v3/teacher/lesson-days/es')
        expect(response.statusCode).toBe(200)
        done()
    })

    test('Return all lesson days by language EN and by lesson ID', async done => {
        let response = await request(app).get('/ecp-api/v3/teacher/lesson-days/en/DAY_0006')
        expect(response.statusCode).toBe(200)
        done()
    })

    test('Return all lesson days by language EN, week ID and lesson day number', async done => {
        let response = await request(app).get('/ecp-api/v3/teacher/lesson-days/en/WEEK_0002/1')
        expect(response.statusCode).toBe(200)
        done()
    })

})