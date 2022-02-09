const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./frameworks/web/routes');
const projectDependencies = require('./config/projectDependencies');
const ErrorHandler = require('./frameworks/common/ErrorHandler');
const logger = require('./frameworks/common/logger');

const app = express();
const port = process.env.PORT || 3000;

// load app only if db is alive and kicking
projectDependencies.DatabaseService.initDatabase().then(() => {

    // load middlewares
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    // load routes
    app.use('/api', routes(projectDependencies));

    // generic error handler
    app.use(ErrorHandler);
    // app.use(logger);

    // eslint-disable-next-line arrow-body-style
    if (process.env.NODE_ENV !== 'test') {
        const server = app.listen(port, () =>
            logger.info(`express server listen on http://localhost:${port}`)
        );
    }

    app.get('/quit', function (_, res) {
        res.send('closing..');
        server.close();


    });
}, (err) => {
    logger.info(`db is not ready, err:${err}`);
});

module.exports = app;