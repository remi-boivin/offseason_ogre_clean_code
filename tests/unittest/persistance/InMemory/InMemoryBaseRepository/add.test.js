const Dependencies = require('../../../../config/dependencies')

const dependencies = new Dependencies()
const params = dependencies.datas.valid

describe('base uses cases ', () => {

    test('Should get a base', async () => {
        baseRepository = new dependencies.BaseRepository([]);

        entity = await baseRepository.add(params)
        expect(entity).toEqual(params);
    });
});