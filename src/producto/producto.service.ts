import { Injectable } from '@nestjs/common';
import {Model} from 'mongoose'
import {InjectModel} from '@nestjs/mongoose'
import { Producto } from "./producto.interface";
import { CreateProductoDTO } from "./producto.dto";
import { productSchema } from './producto.schema';

@Injectable()
export class ProductoService {
    constructor(@InjectModel('Producto') private readonly productModel: Model<Producto>){}

    // async processProducto(createProductoDTO: CreateProductoDTO):Promise<Producto>{
    //     const prod = await new this.productModel(createProductoDTO)
    //     return await producto.save()
    //     //return prod
    // }

    saveProducto(producto){
        return producto
    }

    async getProducts(): Promise<Producto[]>{
        const prod = await this.productModel.find();
        return prod
    }

    async getProduct(id: number): Promise<Producto>{
        const prod= await this.productModel.findById(id);
        return prod
    }
    async createProduct(createProductoDTO: CreateProductoDTO):Promise<Producto>{
        const prod = await new this.productModel(createProductoDTO)
        await prod.save()
        return prod
    }
    async deleteProduct(id):Promise<Producto>{
        const deleteProd = await this.productModel.findByIdAndDelete(id)
        return deleteProd
    }

    async updateProduct(id):Promise<Producto>{
        const updateProd = await this.productModel.findByIdAndUpdate(id,CreateProductoDTO, {new:true})
        
        return updateProd
    }
}
