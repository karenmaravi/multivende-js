import { Document } from "mongoose";

export interface Producto extends Document {
    readonly name: string;
    readonly despription: string;
    readonly price: number,
    readonly createdAt: Date
}