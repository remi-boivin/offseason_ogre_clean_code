module.exports = class Base {
    constructor(timestampsInstance) {
        this.id = null;
        this.createdAt = timestampsInstance;
        this.updateAt = timestampsInstance;
    }
};