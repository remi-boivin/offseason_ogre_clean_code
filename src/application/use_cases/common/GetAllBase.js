module.exports = class GetAllBaseCases {
    constructor(baseRepository) {
        this.baseRepository = baseRepository;
    }

    async Execute() {
        return this.baseRepository.getAll();
    }
};