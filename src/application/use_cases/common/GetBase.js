module.exports = class GetBaseCase {
    constructor(baseRepository) {
        this.baseRepository = baseRepository;
    }

    async Execute(id) {
        return this.baseRepository.getById(id);
    }
};