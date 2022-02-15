import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductoService } from './producto/producto.service';
import { PedidoService } from './pedido/pedido.service';
import { PedidoModule } from './pedido/pedido.module';

@Module({
  imports: [PedidoModule],
  controllers: [AppController],
  providers: [AppService, ProductoService, PedidoService],
})
export class AppModule {}
