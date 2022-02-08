const Dependencies = require('../../../../config/dependencies')

const dependencies = new Dependencies()

describe('base Repository', () => {

    test('Should get all base instances', async () => {
        baseRepository = new dependencies.BaseRepository([dependencies.datas.valid,dependencies.datas.valid,dependencies.datas.valid]);

       entities =  await baseRepository.getAll()
        expect(entities).toEqual([dependencies.datas.valid,dependencies.datas.valid,dependencies.datas.valid]);
    });
});