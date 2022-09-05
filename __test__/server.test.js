'use strict';

const { json } = require('body-parser');
const supertest = require('supertest');
const server = require('../server');
const request = supertest(server.app);

describe('Express Server', () => {
    it('Home Page Test', async () => {
        const res = await request.get('/');
        expect(res.text).toEqual('Hello World')
        expect(res.status).toBe(200)

    })

    it('Persons Page Test', async () => {
        const res = await request.post('/person').send({
            
                name: "cholo",
                age: 20,
                gender:"male"
               
               
        }) 
        expect(res.status).toBe(200)
        let obj = JSON.parse(res.text)
        console.log(res.text.age)
        expect(obj.age).toEqual(25);

               
        })


    })




// how to test an object?
