const AddPlayerCase = require('../application/use_cases/players/AddPlayer');
const GetAllPlayerCase = require('../application/use_cases/players/GetAllPlayers');
const GetPlayerCase = require('../application/use_cases/players/GetPlayer');
const UpdatePlayerCase = require('../application/use_cases/players/UpdatePlayer');
const DeletePlayerCase = require('../application/use_cases/players/DeletePlayer');

module.exports = ((repository) => {
    return {
        AddPlayer: new AddPlayerCase(repository),
        GetAllPlayers: new GetAllPlayerCase(repository),
        GetPlayer: new GetPlayerCase(repository),
        UpdatePlayer: new UpdatePlayerCase(repository),
        DeletePlayer: new DeletePlayerCase(repository),
    };
})();