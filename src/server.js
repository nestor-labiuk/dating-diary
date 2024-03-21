import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { dbConnection } from './db/config.js'

export class Server {
    constructor() {
        this.app = express()
        this.middleware()
        this.routes()
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
        this.app.use('/api/users', (req, res,) => {
            res.send('Welcome')
        })

    }

    listen() {
        this.app.listen(process.env.PORT, () => {
            console.log(`Server listening  http://localhost:${process.env.PORT}`)
        })
    }}
