const Dependencies = require('../../../../config/dependencies')

const dependencies = new Dependencies()

describe('base Repository ', () => {

    test('Should update a base instance', async () => {
        baseRepository = new dependencies.BaseRepository([dependencies.datas.valid]);

        await baseRepository.update(dependencies.datas.updated, ["firstName", "lastName", "email", "username","password"]).then((entity) => {
            expect(entity).toEqual(dependencies.datas.updated);
        });
    });
});