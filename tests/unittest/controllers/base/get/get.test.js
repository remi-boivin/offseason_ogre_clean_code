let { mockRequest, mockResponse, mockNext } = require('../../../../utils/interceptor')
const Dependencies = require('../../../../config/dependencies')
let controller = require('../../../../../src/controllers/BaseController')
let utils = require('utils')

let dependencies = new Dependencies()

describe("Check method \'baseController\' ", () => {

    beforeAll(() => {
        dependencies.GetBaseCase.prototype.Execute = jest.fn().mockResolvedValue(dependencies.datas.valid);
    });

    test('should 200 and return correct value', async () => {
        const req = mockRequest();
        const res = mockResponse();

        baseController = new controller(dependencies.Base, dependencies.BaseRepository, dependencies.AddBaseCase, dependencies.GetBaseCase, dependencies.UpdateBaseCase, dependencies.DeleteBaseCase);
        await baseController.get(req, res)
        expect(res.status).toHaveBeenCalledWith(200)
        expect(res.json).toHaveBeenCalledWith(dependencies.datas.valid);
    });

    test('should 404 and return correct value', async () => {
        let base
        dependencies.GetBaseCase.prototype.Execute = jest.fn().mockResolvedValue(base);

        const req = mockRequest();
        const res = mockResponse();

        baseController = new controller(dependencies.Base, dependencies.BaseRepository, dependencies.AddBaseCase, dependencies.GetBaseCase, dependencies.UpdateBaseCase, dependencies.DeleteBaseCase);
        await baseController.get(req, res)

        expect(res.status).toHaveBeenCalledWith(404);
        expect(res.json).toHaveBeenCalledWith({ message: 'The entity was not found' });
    });

    test('should return The entity was not found Error', async () => {
        const req = mockRequest();
        const res = mockResponse();
        const next = mockNext();
        let base;

        dependencies.GetBaseCase.prototype.Execute = jest.fn().mockRejectedValue(new Error('The entity was not found'));
        baseController = new controller(dependencies.Base, dependencies.BaseRepository, dependencies.GetAllBaseCase, dependencies.GetBaseCase, dependencies.AddBaseCase, dependencies.UpdateBaseCase, dependencies.DeleteBaseCase);
        await baseController.get(req, res, next)
        expect(next).toHaveBeenCalledWith(new Error('The entity was not found'));
    });


    afterAll(() => {
        jest.restoreAllMocks();
    });
});
