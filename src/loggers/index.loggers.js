import { createLogger, format, transports } from 'winston'

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
