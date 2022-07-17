module.exports = class DeleteBaseCase {
    constructor(BaseRepository) {
        this.BaseRepository = BaseRepository;
    }

    async Execute(id) {

        const entity = await this.BaseRepository.getById(id);
        if (!entity) {
            throw new Error('The entity not exist in the system');
        }
        // delete base
        await this.BaseRepository.delete(id, entity);
        return 'Entity deleted successfully';
    }
};