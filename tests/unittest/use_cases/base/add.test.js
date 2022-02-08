var sinon = require("sinon");
const Dependencies = require('../../../config/dependencies')
const Base = require('../../../../src/entities/Base')
const dependencies = new Dependencies()
const params = dependencies.datas.valid

describe('base uses cases ', () => {

    beforeEach(() => {
        sinon.stub(dependencies.BaseRepository.prototype, "getById").returns(params);
    });

    test('Should add a base entity', async () => {
        sinon.stub(dependencies.BaseRepository.prototype, "add").returns(params);

        baseRepository = new dependencies.BaseRepository();
        const addBaseCase = new dependencies.AddBaseCase(baseRepository);

        addBaseCase.Execute(params, Base).then((entities) => {
            expect(entities).toEqual(params);
        });
    });

    afterEach(() => {
        sinon.restore();
    });
});
