import mongoose from 'mongoose'

export const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Connect to database')
    } catch (error) {
        console.log('Not connected to database')
    }
}
