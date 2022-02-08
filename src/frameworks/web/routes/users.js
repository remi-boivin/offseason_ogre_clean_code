const express = require('express');
const UserController = require('../../../controllers/UserController');

const usersRouter = (dependencies) => {
    const router = express.Router();
    const controller = new UserController(dependencies);

    router.route('/')
        .get(controller.getAll)
        .put(controller.add);
    router.route('/:id')
        .get(controller.get)
        .post(controller.update)
        .delete(controller.delete);
    return router;
};

module.exports = usersRouter;