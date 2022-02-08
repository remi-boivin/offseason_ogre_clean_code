module.exports = class Player {
    constructor(playerInstance) {
        this.id = null;
        console.log(playerInstance)
        if (!playerInstance.adultsPerHousehold || playerInstance.childrenPerHousehold == NaN) {
            throw new Error('Player must have adultsPerHousehold and childrenPerHousehold');
        } else {
            this.adultsPerHousehold = playerInstance.adultsPerHousehold;
            this.childrenPerHousehold = playerInstance.childrenPerHousehold;
            this.personPerHousehold = playerInstance.adultsPerHousehold + playerInstance.childrenPerHousehold;
        }
    }
};