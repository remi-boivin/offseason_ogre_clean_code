var sinon = require("sinon");
const Dependencies = require('../../../config/dependencies')
const Base = require('../../../../src/entities/Base')
const dependencies = new Dependencies()
const paramsUpdated = dependencies.datas.updated
const params = dependencies.datas.valid

describe('UpdateBase uses cases ', () => {
    beforeAll(() => {
        sinon.stub(dependencies.BaseRepository.prototype, "update").returns(paramsUpdated);
    });

    test('Should update a base', async () => {
        let updatedEntity;
        sinon.stub(dependencies.BaseRepository.prototype, "getById").returns(params);
        baseRepository = new dependencies.BaseRepository();
        const updateBaseCase = new dependencies.UpdateBaseCase(baseRepository);

        await updateBaseCase.Execute(1, paramsUpdated, Base).then((entity) => {
            expect(entity).toEqual(paramsUpdated);
        });
    });

    test('Should update a base', async () => {
        let updatedEntity;

        baseRepository = new dependencies.BaseRepository();
        const updateBaseCase = new dependencies.UpdateBaseCase(baseRepository);

        await updateBaseCase.Execute(1, paramsUpdated, Base).then((entity) => {}).catch((error) => {
            expect(error).toEqual(new Error('The entity was not found'));
        });
    });
    afterEach(() => {
        sinon.restore();
    });
});