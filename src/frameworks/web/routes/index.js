const express = require('express');
const users = require('./users');

const apiRouter = (dependencies) => {
    const routes = express.Router();
    const usersRouter = users(dependencies);

    routes.use('/users', usersRouter);

    // default: if no other path is corresponding, returns 404 error to user
    routes.use((_, response) => {
        response.status(404).json('endpoint not found');
    });
    return routes;
};


module.exports = apiRouter;