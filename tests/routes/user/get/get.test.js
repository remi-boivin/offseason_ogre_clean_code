const Dependencies = require('../../../config/dependencies')

let dependencies = new Dependencies()

describe('Routes: get', () => {

    beforeAll(async () => {
        // dependencies.server.listen(3000);
    });

    describe('GET /api/users', () => {
        test('Should return all users', async () => {
            const res = await dependencies.chai.request(dependencies.server).get('/api/users');
            expect(res.status).toEqual(200);
            expect(res.body).toBeDefined();
        });
    });

    describe('GET /api/users/:id', () => {
        test('Should return an user', async () => {
            const res = await dependencies.chai.request(dependencies.server).get('/api/users/1');
            expect(res.status).toEqual(200);
            expect(res.body.firstName).toEqual("John");
            expect(res.body.lastName).toEqual("Smith");
            expect(res.body.username).toEqual("john.smith");
            expect(res.body.password).toEqual("password");
            expect(res.body.email).toEqual("john.smith@outlook.com");
        });

        // TODO: Check why it didn't return {"error": "The entity was not found"}
        test(`Not found entity: Should return "${dependencies.errors.messages.entityNotFound}"`, async () => {
            const res = await dependencies.chai.request(dependencies.server).get('/api/users/23');
            expect(res.status).toEqual(404);
            expect(res.body).toEqual(dependencies.errors.entityNotFoundMessage);
        });
    });

    test('Should return array of posts', async () => {
        const res = await dependencies.chai.request(dependencies.server).get('/api/jjhkjhjkkjhk');
        expect(res.status).toEqual(404);
        expect(res.body).toEqual('endpoint not found');
    });

});