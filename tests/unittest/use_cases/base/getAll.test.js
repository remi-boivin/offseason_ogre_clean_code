var sinon = require("sinon");
const Dependencies = require('../../../config/dependencies')

const dependencies = new Dependencies()
const paramsArray = [dependencies.datas.valid,dependencies.datas.valid,dependencies.datas.valid]

describe('getAllBase uses cases ', () => {
    beforeEach(() => {
        sinon.stub(dependencies.BaseRepository.prototype, "getAll").returns(paramsArray);
    });

    test('Should return all bases', async () => {
        baseRepository = new dependencies.BaseRepository();
        const getAllBaseCases = new dependencies.GetAllBaseCase(baseRepository);

        await getAllBaseCases.Execute().then((entities) => {
            expect(entities).toEqual(paramsArray);
        });
    });
});
