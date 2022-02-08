var sinon = require("sinon");
const Dependencies = require('../../../config/dependencies')

const dependencies = new Dependencies()
const params = dependencies.datas.valid

describe('base uses cases ', () => {

    beforeEach(() => {
        sinon.stub(dependencies.BaseRepository.prototype, "delete").returns('Entity deleted successfully');
    });

    test('Should delete a base', async () => {
        sinon.stub(dependencies.BaseRepository.prototype, "getById").returns(params);
        baseRepository = new dependencies.BaseRepository();
        const deleteBaseCase = new dependencies.DeleteBaseCase(baseRepository);

        await deleteBaseCase.Execute(1).then((entities) => {
            expect(entities).toEqual('Entity deleted successfully');
        });
    });

    test('Should delete a base', async () => {
        baseRepository = new dependencies.BaseRepository();
        const deleteBaseCase = new dependencies.DeleteBaseCase(baseRepository);

        await deleteBaseCase.Execute(1).then((entities) => {}).catch((error) => {
            expect(error).toEqual(new Error('The entity was not found'));
        });
    });

    afterEach(() => {
        sinon.restore();
    })
});