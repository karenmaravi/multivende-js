import { Module } from '@nestjs/common';
import { ProductoController } from './producto.controller';
import { ProductoService } from './producto.service';
import { MongooseModule } from '@nestjs/mongoose'
import { productSchema } from './producto.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            {name: 'Producto', schema: productSchema}
        ])
    ],
    controllers: [ProductoController],
    providers: [ProductoService],
  })
export class ProductoModule {}
