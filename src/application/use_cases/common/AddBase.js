module.exports = class AddBaseCase {
    constructor(baseRepository) {
        this.baseRepository = baseRepository;
    }

    async Execute(params, Entity) {
        const newEntity = new Entity(params);
        return this.baseRepository.add(newEntity);
    }
};