import { createLogger, format, transports } from 'winston'
import DeletedTransport from './transport/DeletedTransport.js'

export const logger = createLogger({
    level: 'info',
    format:
    format.combine(
        format.json(),
        format.timestamp({ format: 'DD.MM.YYYY HH:mm:ss' }),
        format.prettyPrint()
    ),
    defaultMeta: { service: 'user-service' },
    transports: [
        new transports.File({ filename: 'errors.log', level: 'error' }),
        new transports.File({ filename: 'warns.log', level: 'warn' }),
        new transports.File({ filename: 'general.log' }),
        new transports.Console({
            format:
            format.combine(
                format.colorize(),
                format.cli()
            )
        })
    ]
})

export const removedEntitiesLogger = createLogger({
    level: 'info',
    format:
    format.combine(
        format.json(),
        format.timestamp({ format: 'DD.MM.YY HH:mm:ss' }),
        format.prettyPrint()
    ),
    defaultMeta: { service: 'user_service' },
    transports: [
        new transports.File({ filename: 'removeEntities.log' }),
        new transports.File({ filename: 'general.log' }),
        new DeletedTransport({ level: 'info' }),
        new transports.Console({
            format:
            format.combine(
                format.colorize(),
                format.cli()
            )
        })
    ]
})
