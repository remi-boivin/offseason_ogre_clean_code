const InMemoryDatabaseServices = require('../frameworks/persistance/InMemory/InMemoryDatabaseServices');
<<<<<<< HEAD
const AddUserCase = require('../application/use_cases/users/AddUser');
const GetAllUsersCase = require('../application/use_cases/users/GetAllUsers');
const GetUserCase = require('../application/use_cases/users/GetUser');
const UpdateUserCase = require('../application/use_cases/users/UpdateUser');
const DeleteUserCase = require('../application/use_cases/users/DeleteUser');
=======
const AddPlayerCase = require('../application/use_cases/players/AddPlayer');
const GetAllPlayerCase = require('../application/use_cases/players/GetAllPlayers');
const GetPlayerCase = require('../application/use_cases/players/GetPlayer');
const UpdatePlayerCase = require('../application/use_cases/players/UpdatePlayer');
const DeletePlayerCase = require('../application/use_cases/players/DeletePlayer');
>>>>>>> dd1fbea (Initial commit)

module.exports = (() => {
    return {
        DatabaseService: new InMemoryDatabaseServices(),
    };
})();