module.exports = class BaseController {

    constructor(Entity, baseRepository, GetAllBaseCases, GetBaseCase, AddBaseCase, UpdateBaseCase, DeleteBaseCase) {
        Object.assign(this, { Entity });
        Object.assign(this, { baseRepository });
        Object.assign(this, { GetAllBaseCases });
        Object.assign(this, { DeleteBaseCase });
        Object.assign(this, { AddBaseCase });
        Object.assign(this, { GetBaseCase });
        Object.assign(this, { UpdateBaseCase });
    }

    add = (req, res, next) => {
        // init use case
        const AddBaseCommand = new this.AddBaseCase(this.baseRepository, this.Entity);
        // call use case
        AddBaseCommand.Execute(req.body, this.Entity).then((response) => {
            res.status(200).json(response);
        }, (err) => {
            next(err);
        });
    };

    getAll = (_, res, next) => {
        let GetAllEntitiesQuery = new this.GetAllBaseCases(this.baseRepository);
        GetAllEntitiesQuery.Execute().then((entities) => {
            res.status(200).json(entities);
        }, (err) => {
            next(err);
        });
    };

    get = (req, res, next) => {
        const GetEntityQuery = new this.GetBaseCase(this.baseRepository);

        GetEntityQuery.Execute(req.params.id).then((entity) => {
            entity ? res.status(200).json(entity) : res.status(404).json({ message: 'The entity was not found' });
        }, (err) => {
            next(err);
        });
    };

    update = (req, res, next) => {
        const UpdateEntityQuery = new this.UpdateBaseCase(this.baseRepository);

        UpdateEntityQuery.Execute(req.params.id, req.body, this.Entity).then((entity) => {
            // res.status(200).json(entity)
            entity ? res.status(200).json(entity) : res.status(404).json({ message: 'The entity was not found' });
        }, (err) => {
            next(err);
        });
    };

    delete = (req, res, next) => {
        const DeleteEntityQuery = new this.DeleteBaseCase(this.baseRepository);

        DeleteEntityQuery.Execute(req.params.id).then((entity) => {
            entity ? res.status(200).json('The entity was deleted') : res.status(404).json({ message: 'The entity was not found' });
        }, (err) => {
            next(err);
        });
    };
};