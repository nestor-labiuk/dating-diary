import { model, Schema } from 'mongoose'

const RoleSchema = new Schema(
    {
        role: {
            type: 'string',
            required: true
        },
        description: {
            type: 'string',
            required: true
        }
    })

export default model('Role', RoleSchema)
