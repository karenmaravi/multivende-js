import { Controller, Post, Res, HttpStatus, Body } from '@nestjs/common';
import { CreateProductoDTO } from './producto.dto';
import { ProductoService } from "./producto.service";

@Controller('producto')
export class ProductoController {
    constructor(private productoService: ProductoService){}
    // @Post('/save')
    // saveProducto (@Res() res, @Body() CreateProductoDTO){
    //     console.log(CreateProductoDTO)
    //     res.status(HttpStatus.OK).json({
    //         message: 'received'
    //     })
    // }

    @Post('/save')
    async createPost (@Res() res, @Body() createProductoDTO: CreateProductoDTO){
        const prod = await this.productoService.createProduct(createProductoDTO)
        console.log(prod)
        res.status(HttpStatus.OK).json({
            message: 'received',
            product: prod
        })
    }
}
