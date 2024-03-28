/* eslint-disable @typescript-eslint/naming-convention */
import { createLogger, format, transports } from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';

// const logger = createLogger({
//     level: 'debug',
//     format: ecsFormat(),
//     transports: [
//         new transports.File({ filename: './logs/error.log', level: 'error' }),
//         new transports.File({ filename: './logs/combined.log' }),
//     ],
// });

const errOption = {
    level: 'error',
    dirname: 'logs',
    filename: 'error-%DATE%.log',
    maxSize: '5m',
    maxFiles: '90d',
    format: format.combine(
        format.timestamp({
            format() {
                return new Date().toLocaleString();
            },
        }),
        format.simple()
    ),
};

const logger = createLogger({
    level: 'debug',
    transports: [
        new DailyRotateFile({
            level: 'debug',
            dirname: 'logs',
            filename: 'combined-%DATE%.log',
            maxSize: '10m',
            maxFiles: '60d',
            // datePattern: "YYYY-MM-DD-HH-mm",
            format: format.combine(
                format.timestamp({
                    format() {
                        return new Date().toLocaleString();
                    },
                }),
                format.simple()
            ),
        }),
        new DailyRotateFile(errOption),
    ],
    exceptionHandlers: [new DailyRotateFile(errOption)],
});

if (process.env.NODE_ENV !== 'production') {
    logger.add(
        new transports.Console({
            format: format.combine(
                format.colorize({ all: true }),
                format.simple()
            ),
            handleExceptions: true,
        })
    );
}

export { logger };
