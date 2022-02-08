
module.exports = class UpdateBaseCase {
    constructor(baseRepository) {
        this.baseRepository = baseRepository;
    }

    async Execute(id, params, Entity) {
        const entitySearched = await this.baseRepository.getById(id);
        id = parseInt(id)

        if (!entitySearched) {
            throw new Error('The entity not exist in the system');
        }
        const entityUpdated = new Entity(params);
        entityUpdated.id = id;
        return this.baseRepository.update(entityUpdated);
    }
};