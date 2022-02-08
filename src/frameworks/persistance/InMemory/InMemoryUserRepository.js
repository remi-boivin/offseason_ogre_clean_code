/* eslint-disable no-param-reassign */
/* eslint-disable arrow-body-style */
// const UserRepository = require('../../../application/contracts/UserRepository');
const InMemoryBaseRepository = require('./InMemoryBaseRepository');

module.exports = class InMemoryUserRepository extends InMemoryBaseRepository {

    constructor() {
        let users = []

        super(users);
        // this.inMemoryBaseRepository = new InMemoryBaseRepository()
        // this.users = []
        // this.currentId = 0;
    }

    // async add(userInstance) {
    //     userInstance = this.inMemoryBaseRepository.add(userInstance)
    //     userInstance.then((response) => {
    //         this.users.push(response);
    //     }, (err) => {
    //         next(err);
    //     });
    //     return userInstance;
    // }

    // async update(userInstance) {
    //     let user;
    //     user = this.inMemoryBaseRepository.update(userInstance, ["firstName", "lastName", "username", "password", "email"])
    //     user.then((response) => { });
    //     return user;
    // }

    // async delete(userId) {
    //     // try {
    //     //     const id = parseInt(userId);
    //     //     const userIndex = this.users.findIndex(x => x.id === id);
    //     //     if (userIndex !== -1) {
    //     //         this.users.splice(userIndex, 1);
    //     //     }
    //     // } catch (error) {
    //     //     throw new Error('Error Occurred');
    //     // }
    //     this.users = this.inMemoryBaseRepository.delete(int(userId), this.users)
    //     this.users.then((response) => { });
    //     console.log(this.users)
    //     return true;
    // }

    // async getById(userId) {
    //     let user;
    //     try {
    //         const id = parseInt(userId);
    //         console.log('°°°°°°°°°°°°°°°°°°: ' + this.users)
    //         user = this.users.find(x => x.id === id);
    //     } catch (err) {
    //         throw new Error(err);
    //     }
    //     return user;
    // }

    // async getAll() {
    //     return this.users;
    // }
};