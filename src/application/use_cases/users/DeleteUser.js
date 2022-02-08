const DeleteBaseCase = require('../common/DeleteBase');

module.exports = class DeleteUserCase extends DeleteBaseCase {
    constructor(UserRepository) {
        super(UserRepository);
    }
};