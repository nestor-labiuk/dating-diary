import mongoose from 'mongoose'
import { logger } from '../loggers/index.loggers.js'

export const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        logger.info('Connected to database')
    } catch (error) {
        logger.error('Not connected to database')
    }
}
