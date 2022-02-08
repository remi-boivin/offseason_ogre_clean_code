const GetAllBaseCase = require('../common/GetAllBase');

module.exports = class getAllUserCase extends GetAllBaseCase {
    constructor(UserRepository) {
        super(UserRepository);
    }
};