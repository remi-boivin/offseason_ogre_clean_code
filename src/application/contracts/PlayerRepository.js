/* eslint-disable no-empty-function */
/* eslint-disable no-useless-constructor */
/* eslint-disable class-methods-use-this */
module.exports = class PlayerRepository {
    constructor() {}

    add(playerInstance) {
        return Promise.reject(new Error('not implemented'));
    }

    update(playerInstance) {
        return Promise.reject(new Error('not implemented'));
    }

    delete(playerInstance) {
        return Promise.reject(new Error('not implemented'));
    }

    getById(StudentId) {
        return Promise.reject(new Error('not implemented'));
    }

    getByEmail(StudentId) {
        return Promise.reject(new Error('not implemented'));
    }

    getAll() {
        return Promise.reject(new Error('not implemented'));
    }
};