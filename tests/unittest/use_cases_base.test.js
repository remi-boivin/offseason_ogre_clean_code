const BaseRepository = require("../../src/frameworks/persistance/InMemory/InMemoryBaseRepository");
const getAllBaseCase = require("../../src/application/use_cases/common/GetAllBase");
const getBaseCase = require("../../src/application/use_cases/common/GetBase");
const UpdateBaseCase = require("../../src/application/use_cases/common/UpdateBase");
const User = require("../../src/entities/User");
var sinon = require("sinon");
const DeleteBaseCase = require("../../src/application/use_cases/common/DeleteBase");
const AddBaseCase = require("../../src/application/use_cases/common/AddBase");
const Dependencies = require('../config/dependencies')

const dependencies = new Dependencies()
const params = dependencies.datas.valid
const paramsArray = [dependencies.datas.valid,dependencies.datas.valid,dependencies.datas.valid]
const paramsUpdated = dependencies.datas.updated

describe('base uses cases ', () => {

    beforeEach(() => {
        sinon.stub(BaseRepository.prototype, "getById").returns(params);
    });

    test('Should get a base', async() => {
        baseRepository = new BaseRepository();
        const getBaseCases = new getBaseCase(baseRepository);

        getBaseCases.Execute().then((entities) => {
            expect(entities).toEqual(params);
        });
    });

    test('Should update a base', async() => {
        sinon.stub(BaseRepository.prototype, "update").returns(paramsUpdated);

        baseRepository = new BaseRepository();
        const updateBaseCase = new UpdateBaseCase(baseRepository);

        updateBaseCase.Execute(1, paramsUpdated, User).then((entities) => {
            expect(entities).toEqual(paramsUpdated);
        });
    });

    test('Should delete a base', async() => {
        sinon.stub(BaseRepository.prototype, "delete").returns('Entity deleted successfully');

        baseRepository = new BaseRepository();
        const deleteBaseCase = new DeleteBaseCase(baseRepository);

        deleteBaseCase.Execute(1).then((entities) => {
            expect(entities).toEqual('Entity deleted successfully');
        });
    });

    test('Should add a base entity', async() => {
        sinon.stub(BaseRepository.prototype, "add").returns(params);

        baseRepository = new BaseRepository();
        const addBaseCase = new AddBaseCase(baseRepository);

        addBaseCase.Execute(params, User).then((entities) => {
            expect(entities).toEqual(params);
        });
    });

    afterEach(() => {
        sinon.restore();
    });
});