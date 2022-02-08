module.exports = class Dependencies {
    constructor() {
        process.env.NODE_ENV = 'test';
        this.chai = require('chai');
        this.chaiHttp = require('chai-http');
        this.chai.use(this.chaiHttp);
        this.server = require('../../src/app');
        this.datas = require('./data')
        this.errors = require('./errors')
        this.Base = require('../../src/entities/Base')
        this.BaseRepository = require('../../src/frameworks/persistance/InMemory/InMemoryBaseRepository')
        this.GetBaseCase = require('../../src/application/use_cases/common/GetBase')
        this.UpdateBaseCase = require('../../src/application/use_cases/common/UpdateBase')
        this.DeleteBaseCase = require('../../src/application/use_cases/common/DeleteBase')
        this.AddBaseCase = require('../../src/application/use_cases/common/AddBase')
        this.GetAllBaseCase = require('../../src/application/use_cases/common/GetAllBase')
    }
}