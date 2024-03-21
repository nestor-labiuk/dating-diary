import mongoose from 'mongoose'

export const dbConnection = async () => {
    try {
        await mongoose.connect(('connection'))
        console.log('Connect to database')
    } catch (error) {
        console.log('Not connected to database')
    }
}
