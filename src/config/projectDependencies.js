const InMemoryDatabaseServices = require('../frameworks/persistance/InMemory/InMemoryDatabaseServices');
const AddUserCase = require('../application/use_cases/users/AddUser');
const GetAllUsersCase = require('../application/use_cases/users/GetAllUsers');
const GetUserCase = require('../application/use_cases/users/GetUser');
const UpdateUserCase = require('../application/use_cases/users/UpdateUser');
const DeleteUserCase = require('../application/use_cases/users/DeleteUser');

module.exports = (() => {
    return {
        DatabaseService: new InMemoryDatabaseServices(),
    };
})();