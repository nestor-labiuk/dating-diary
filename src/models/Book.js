import { model, Schema } from 'mongoose'

const BookSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        gender: {
            type: String,
            required: true,
        },
        editorial: {
            type: String,
            required: true,
        },
        salesStock: {
            type: Number,
            default: 0,
        },
        rentStock: {
            type: Number,
            default: 0,
        },
    }
)

export default model('Book', BookSchema)
