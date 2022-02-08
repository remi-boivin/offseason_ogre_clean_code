const User = require('../../../entities/User');
const AddBaseCase = require('../common/AddBase');

module.exports = class AddUserCase extends AddBaseCase {
    constructor(UserRepository) {
        super(UserRepository);
    }
};