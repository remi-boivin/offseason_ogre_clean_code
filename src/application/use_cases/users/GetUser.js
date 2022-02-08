const GetBaseCase = require('../common/GetBase');

module.exports = class GetUserCase extends GetBaseCase {
    constructor(UserRepository) {
        super(UserRepository);
    }
};