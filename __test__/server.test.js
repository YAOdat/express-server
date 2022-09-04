'use strict';
const supertest = require('supertest');
const server = require('../server');
const request = supertest(server.app);


describe('Express Server', () => {
    it('Home Page works', async () => {
        const res = await request.get('/');
        expect(res.text).toEqual('Hello World')
    })

})