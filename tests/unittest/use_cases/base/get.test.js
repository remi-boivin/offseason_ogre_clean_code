var sinon = require("sinon");
const Dependencies = require('../../../config/dependencies')

const dependencies = new Dependencies()
const params = dependencies.datas.valid

describe('base uses cases ', () => {

    beforeEach(() => {
        sinon.stub(dependencies.BaseRepository.prototype, "getById").returns(params);
    });

    test('Should get a base', async () => {
        baseRepository = new dependencies.BaseRepository();
        const getBaseCase = new dependencies.GetBaseCase(baseRepository);

        await getBaseCase.Execute().then((entity) => {
            expect(entity).toEqual(params);
        });
    });
});