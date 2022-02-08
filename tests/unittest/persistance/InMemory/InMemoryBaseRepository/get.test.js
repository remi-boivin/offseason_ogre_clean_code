const Dependencies = require('../../../../config/dependencies')

const dependencies = new Dependencies()

describe('base Repository ', () => {

    test('Should update a base instance', async () => {
        baseRepository = new dependencies.BaseRepository([dependencies.datas.valid]);

        entity = await baseRepository.getById(1)
        expect(entity).toEqual(dependencies.datas.valid);
    });
});