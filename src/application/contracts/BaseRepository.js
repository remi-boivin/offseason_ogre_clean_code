/* eslint-disable no-empty-function */
/* eslint-disable no-useless-constructor */
/* eslint-disable class-methods-use-this */
module.exports = class BaseRepository {
    constructor() {}

    add(baseInstance) {
        return Promise.reject(new Error('not implemented'));
    }

    update(baseInstance) {
        return Promise.reject(new Error('not implemented'));
    }

    delete(baseInstance) {
        return Promise.reject(new Error('not implemented'));
    }

    getById(baseId) {
        return Promise.reject(new Error('not implemented'));
    }

    getByEmail(baseId) {
        return Promise.reject(new Error('not implemented'));
    }

    getAll() {
        return Promise.reject(new Error('not implemented'));
    }
};