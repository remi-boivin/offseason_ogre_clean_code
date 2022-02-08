/* eslint-disable no-param-reassign */
/* eslint-disable arrow-body-style */
const BaseRepository = require('../../../application/contracts/BaseRepository');

module.exports = class InMemoryBaseRepository extends BaseRepository {

    constructor(base = []) {
        super();
        this.bases = base;
        this.currentId = 0;
    }

    async add(baseInstance) {
        try {
            this.currentId = this.currentId + 1;
            baseInstance.id = this.currentId;
            this.bases.push(baseInstance);
        } catch (err) {
            throw new Error(err);
        }
        return baseInstance;
    }

    async update(baseInstance, valuesKeys = ["createdAt", "updatedAt"]) {
        let base;
        let id = parseInt(baseInstance.id);

        try {
            base = this.bases.find(x => x.id === id);
            if (base) {
                for (let keys in valuesKeys) {
                    let key = valuesKeys[keys]
                    base[key] = baseInstance[key];
                }
            }
        } catch (err) {
            throw new Error(err);
        }
        return base;
    }

    async delete(baseId, entity) {
        try {
            const id = parseInt(baseId);
            const baseIndex = this.bases.findIndex(x => x.id === id);
            if (baseIndex !== -1) {
                this.bases.splice(baseIndex, 1);
            }
        } catch (err) {
            throw new Error(err);
        }

        return entity;
    }

    async getById(baseId) {
        let base;

        try {
            const id = parseInt(baseId);
            base = this.bases.find(x => x.id === id);
        } catch (err) {
            throw new Error(err);
        }
        return base;
    }

    async getAll() {
        return this.bases;
    }
};