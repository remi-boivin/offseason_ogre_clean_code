const UpdateBaseCase = require('../common/UpdateBase');
const User = require('../../../entities/User');

module.exports = class UpdateUserCase extends UpdateBaseCase {
    constructor(UserRepository) {
        super(UserRepository, User);
    }
};