import {Schema} from 'mongoose'
import { CannotDetermineTypeError } from '@nestjs/mongoose'

export const productSchema = new Schema ({
    name: {type: String, required: true},
    description: String,
    price: Number,
    createdAt: {
        type: Date,
        default: Date.now
    }
})