const Dependencies = require('../../../config/dependencies')

let dependencies = new Dependencies()

describe('Routes: post', () => {

    beforeAll(async () => {
        // dependencies.server.listen(3000);
    });

    describe('POST /api/users/:id', () => {
        test('Should return updated user', async() => {
            const res = await dependencies.chai.request(dependencies.server).post('/api/users/1').send(dependencies.datas.updated);
            expect(res.status).toEqual(200);
            expect(res.body.firstName).toEqual(dependencies.datas.updated.firstName);
            expect(res.body.lastName).toEqual(dependencies.datas.updated.lastName);
            expect(res.body.username).toEqual(dependencies.datas.updated.username);
            expect(res.body.password).toEqual(dependencies.datas.updated.password);
            expect(res.body.email).toEqual(dependencies.datas.updated.email);
        });

        test(`Not found entity: Should return: ${dependencies.errors.messages.entityNotFound}`, async() => {
            const res = await dependencies.chai.request(dependencies.server).post('/api/users/22').send(dependencies.datas.updated);
            expect(res.status).toEqual(500);
            expect(res.body).toEqual(dependencies.errors.entityNotFound);
        });
    });



});
