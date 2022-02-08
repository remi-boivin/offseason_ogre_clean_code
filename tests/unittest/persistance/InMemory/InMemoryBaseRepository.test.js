var sinon = require("sinon");
const Dependencies = require('../../../config/dependencies')
const Base = require('../../../../src/entities/Base')
const dependencies = new Dependencies()
const params = dependencies.datas.valid

describe('base uses cases ', () => {

    test('Should add a base entity', async () => {
        baseRepository = new dependencies.BaseRepository([]);
        const addBaseCase = new dependencies.AddBaseCase(baseRepository);

        addBaseCase.Execute(params, Base).then((entities) => {
            expect(entities).toEqual(params);
        });
    });

    afterEach(() => {
        sinon.restore();
    });
});
