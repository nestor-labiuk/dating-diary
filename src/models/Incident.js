import { model, Schema } from 'mongoose'

const IncidentSchema = new Schema({
    message: {
        type: Schema.Types.Mixed,
        required: true
    },
    reviewed: {
        type: Boolean,
        default: false
    }
})

export default model('Incident', IncidentSchema)
