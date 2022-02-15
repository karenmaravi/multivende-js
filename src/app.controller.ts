import { Controller, Get, Post, Body, Param, ParseIntPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { ProductoService } from './producto/producto.service';
import { PedidoService } from './pedido/pedido.service';

@Controller('/ms/multivende')
export class AppController {
  //constructor(private readonly appService: AppService) {}
  constructor(private productoService: ProductoService, pedidoService: PedidoService) {}

  
  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  @Post(`:process`)
  processPedido(@Param('id', ParseIntPipe) id, @Body() body): string{
    if (id == 1){
      
    }
    return this.productoService.processProducto(body)
    //return this.pedidoService.pedidoProducto(body)
  }
}
