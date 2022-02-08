const { createLogger, format, transports } = require('winston');

const logger = createLogger({
    level: 'info',
    format: format.combine(format.colorize(), format.simple(),
        format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        })),
    // format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)),
    format: format.json(),
    transports: [
        new transports.Console(),
        new transports.File({ filename: 'log/quick-start-info.log', level: 'info' }),
        new transports.File({ filename: 'log/quick-start-combined.log' })
    ]
});

module.exports = logger