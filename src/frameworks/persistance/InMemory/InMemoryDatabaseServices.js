const DatabaseServices = require('../../../application/contracts/DatabaseServices');
const InMemoryUserRepository = require('./InMemoryUserRepository');
const User = require('../../../entities/User');

module.exports = class InMemoryDatabaseServices extends DatabaseServices {
    constructor() {
        super();
        this.userRepository = new InMemoryUserRepository();
    }

    async initDatabase() {
        this.seedData();
    }

    async seedData() {
        let sampleUser = new User({ firstName: "John", lastName: "Smith", username: "john.smith", password: "password", email: "john.smith@outlook.com" });

        sampleUser = await this.userRepository.add(sampleUser);
    }
};