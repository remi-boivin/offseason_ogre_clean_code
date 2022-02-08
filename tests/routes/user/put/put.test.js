const Dependencies = require('../../../config/dependencies')

let dependencies = new Dependencies()


describe('Routes: put', () => {
    beforeAll(async () => {
        // dependencies.server.listen(3000);
    });

    describe('PUT /api/users', () => {
        test('Should create an user', async () => {
            const res = await dependencies.chai.request(dependencies.server).put('/api/users/').send(dependencies.datas.valid);

            expect(res.status).toEqual(200);
            expect(res.body.firstName).toEqual(dependencies.datas.valid.firstName);
            expect(res.body.lastName).toEqual(dependencies.datas.valid.lastName);
            expect(res.body.username).toEqual(dependencies.datas.valid.username);
            expect(res.body.password).toEqual(dependencies.datas.valid.password);
            expect(res.body.email).toEqual(dependencies.datas.valid.email);
        });

        test(`Mssing firstName: Should return: \n${dependencies.errors.messages.invalidEntity}`, async () => {
            const res = await dependencies.chai.request(dependencies.server).put('/api/users/').send(dependencies.datas.invalid.firstName);
            expect(res.status).toEqual(500);
            expect(res.body).toEqual(dependencies.errors.invalidEntity);
        });

        test(`Mssing lastName: Should return: \n${dependencies.errors.messages.invalidEntity}`, async () => {
            const res = await dependencies.chai.request(dependencies.server).put('/api/users/').send(dependencies.datas.invalid.lastName);
            expect(res.status).toEqual(500);
            expect(res.body).toEqual(dependencies.errors.invalidEntity);
        });

        test(`Mssing username: Should return: \n${dependencies.errors.messages.invalidEntity}`, async () => {
            const res = await dependencies.chai.request(dependencies.server).put('/api/users/').send(dependencies.datas.invalid.username);
            expect(res.status).toEqual(500);
            expect(res.body).toEqual(dependencies.errors.invalidEntity);
        });

        test(`Mssing password: Should return: \n${dependencies.errors.messages.invalidEntity}`, async () => {
            const res = await dependencies.chai.request(dependencies.server).put('/api/users/').send(dependencies.datas.invalid.password);
            expect(res.status).toEqual(500);
            expect(res.body).toEqual(dependencies.errors.invalidEntity);
        });

        test(`Mssing email: Should return: \n${dependencies.errors.messages.invalidEntity}`, async () => {
            const res = await dependencies.chai.request(dependencies.server).put('/api/users/').send(dependencies.datas.invalid.email);
            expect(res.status).toEqual(500);
            expect(res.body).toEqual(dependencies.errors.invalidEntity);
        });
    });

});