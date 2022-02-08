const BaseController = require('./BaseController');
const GetAllPlayerCase = require('../application/use_cases/players/GetAllPlayers');
const GetPlayerCase = require('../application/use_cases/players/GetPlayer');
const AddPlayerCase = require('../application/use_cases/players/AddPlayer');
const Player = require('../entities/Player');
const UpdatePlayerCase = require('../application/use_cases/players/UpdatePlayer');
const DeletePlayerCase = require('../application/use_cases/players/DeletePlayer');

module.exports = class PlayerController extends BaseController {
    constructor(dependecies) {
        const { playerRepository } = dependecies.DatabaseService
        super(Player, playerRepository, GetAllPlayerCase, GetPlayerCase, AddPlayerCase, UpdatePlayerCase, DeletePlayerCase);
    }
};