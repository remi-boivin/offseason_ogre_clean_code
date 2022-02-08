const BaseController = require('./BaseController');
const GetAllUserCase = require('../application/use_cases/users/GetAllUsers');
const GetUserCase = require('../application/use_cases/users/GetUser');
const AddUserCase = require('../application/use_cases/users/AddUser');
const User = require('../entities/User');
const UpdateUserCase = require('../application/use_cases/users/UpdateUser');
const DeleteUserCase = require('../application/use_cases/users/DeleteUser');

module.exports = class UserController extends BaseController {
    constructor(dependecies) {
        const { userRepository } = dependecies.DatabaseService
        super(User, userRepository, GetAllUserCase, GetUserCase, AddUserCase, UpdateUserCase, DeleteUserCase);
    }
};