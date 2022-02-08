const Dependencies = require('../../../config/dependencies')

let dependencies = new Dependencies()

describe('Routes: delete', () => {
    beforeAll(async () => {
        // dependencies.server.listen(3000);
    });

    describe('DELETE /api/users/:id', () => {
        test('Should delete an user', async () => {
            const res = await dependencies.chai.request(dependencies.server).delete('/api/users/1');
            console.log(res.body)
            expect(res.status).toEqual(200);
            expect(res.body).toBeDefined();

        });

        test('Should return an error when we try to delete not existing user', async () => {
            const res = await dependencies.chai.request(dependencies.server).delete('/api/users/223');
            expect(res.status).toEqual(500);
            expect(res.body).toEqual(dependencies.errors.entityNotFound);
        });
    });

});