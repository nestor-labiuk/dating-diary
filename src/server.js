import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { dbConnection } from './db/config.js'
import { adminRoutes, booksRoutes, loginRoutes, usersRoutes } from './routes/index.routes.js'
import { logger } from './loggers/index.loggers.js'

export class Server {
    constructor() {
        this.app = express()
        this.middlewares()
        this.routes()
        this.connectionDb()
    }

    async connectionDb() {
        await dbConnection()
    }

    middlewares() {
        this.app.use(express.json())
        this.app.use(cors())
        this.app.use(morgan('dev'))
    }

    routes() {
        this.app.use('/api/users', usersRoutes)
        this.app.use('/api/books', booksRoutes)
        this.app.use('/api/login', loginRoutes)
        this.app.use('/api/admin', adminRoutes)
    }

    listen() {
        this.app.listen(process.env.PORT, () => {
            logger.info(`Server listening  http://localhost:${process.env.PORT}`)
        })
    }
}
