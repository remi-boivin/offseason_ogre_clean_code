const Dependencies = require('../../../../config/dependencies')

const dependencies = new Dependencies()

describe('base Repository ', () => {

    test('Should update a base instance', async () => {
        baseEntity = [dependencies.datas.valid];
        baseRepository = new dependencies.BaseRepository(baseEntity);

        entity = await baseRepository.delete(1, baseEntity)
        expect(entity).toEqual([]);
    });
});