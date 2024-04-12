import { model, Schema } from 'mongoose'

const LevelSchema = new Schema(
    {
        level: {
            type: 'string',
            required: true
        },
        description: {
            type: 'string',
            required: true
        }
    })

export default model('Level', LevelSchema)
