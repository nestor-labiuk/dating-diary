import { model, Schema } from 'mongoose'

const DeletedSchema = new Schema({
    message: { 
        type: Schema.Types.Mixed, 
        require: true
    },
    reviewed: {
        type: Boolean, 
        default: false
    }
})

export default model('Deleted', DeletedSchema)
