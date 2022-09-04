'use strict';

const supertest = require('supertest');
const server = require('../server');
const request = supertest(server.app);


describe('Express Server', () => {
    it('Home Page Test', async () => {
        const res = await request.get('/');
        expect(res.text).toEqual('Hello World')
    })

//     it('Persons Page Test', async () => {
//         const res = await (await request.post('/person')).({
//             age: 24
//         })

//         expect( res.text ).toEqual( '29' );
//     })
})

// how to test an object?