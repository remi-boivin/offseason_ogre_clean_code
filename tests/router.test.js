process.env.NODE_ENV = 'test';
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const server = require('../src/app');

describe('Routes: get', () => {

    describe('GET /api/players', () => {
        test('Should return array of posts', async() => {
            const res = await chai.request(server).get('/api/players');
            expect(res.status).toEqual(200);
            expect(res.body).toBeDefined();
        });
    });

    describe('GET /api/players/:id', () => {
        test('Should return array of posts', async() => {
            const res = await chai.request(server).get('/api/players/1');
            expect(res.status).toEqual(200);
            expect(res.body).toBeDefined();
        });

        test('Should return array of posts', async() => {
            const res = await chai.request(server).get('/api/players/23');
            expect(res.status).toEqual(404);
            expect(res.body).toEqual('The entity was not found');
        });
    });

    test('Should return array of posts', async() => {
        const res = await chai.request(server).get('/api/test');
        expect(res.status).toEqual(404);
        expect(res.body).toEqual('endpoint not found');
    });
});

describe('Routes: put', () => {
    describe('PUT /api/players', () => {
        test('Should return array of posts', async() => {
            const res = await chai.request(server).put('/api/players/').send({ adultsPerHousehold: 2, childrenPerHousehold: 1 });
            expect(res.status).toEqual(200);
            expect(res.body.adultsPerHousehold).toEqual(2);
            expect(res.body.childrenPerHousehold).toEqual(1);
        });

        test('Should return array of posts', async() => {
            const res = await chai.request(server).put('/api/players/').send({ childrenPerHousehold: 1 });
            expect(res.status).toEqual(500);
            expect(res.body).toEqual({ "error": "Player must have adultsPerHousehold and childrenPerHousehold" });
            // expect(res.body.childrenPerHousehold).toEqual(1);
        });
    });

});

describe('Routes: post', () => {
    describe('POST /api/players/:id', () => {
        test('Should return array of posts', async() => {
            const res = await chai.request(server).post('/api/players/2').send({ adultsPerHousehold: 2, childrenPerHousehold: 1 });
            expect(res.status).toEqual(200);
            expect(res.body.adultsPerHousehold).toEqual(2);
            expect(res.body.childrenPerHousehold).toEqual(1);
        });

        test('Should return array of posts', async() => {
            const res = await chai.request(server).post('/api/players/22').send({ adultsPerHousehold: 2, childrenPerHousehold: 1 });
            expect(res.status).toEqual(500);
            expect(res.body).toEqual({ "error": "Entity not exist in the system" });
            // expect(res.body.childrenPerHousehold).toEqual(1);
        });
    });
});

describe('Routes: delete', () => {
    describe('DELETE /api/players/:id', () => {
        test('Should return array of posts', async() => {
            const res = await chai.request(server).delete('/api/players/2');
            expect(res.status).toEqual(200);
            expect(res.body).toBeDefined();
        });

        test('Should return array of posts', async() => {
            const res = await chai.request(server).delete('/api/players/223');
            expect(res.status).toEqual(500);
            expect(res.body).toEqual({ "error": "Entity not exist in the system" });
        });
    });
});