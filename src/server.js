import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { dbConnection } from './db/config.js'
import { loginRoutes, usersRoutes } from './routes/index.routes.js'

export class Server {
    constructor() {
        this.app = express()
        this.middleware()
        this.routes()
        this.connectionDb()
    }

    async connectionDb() {
        await dbConnection()
    }

    middleware() {
        this.app.use(express.json())
        this.app.use(cors())
        this.app.use(morgan('dev'))
    }

    routes() {
        this.app.use('/api/users', usersRoutes)
        this.app.use('/api/login', loginRoutes)
    }

    listen() {
        this.app.listen(process.env.PORT, () => {
            console.log(`Server listening  http://localhost:${process.env.PORT}`)
        })
    }
}
