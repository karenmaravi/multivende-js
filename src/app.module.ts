import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
//import { ProductoService } from './producto/producto.service';
// import { PedidoService } from './pedido/pedido.service';
// import { PedidoModule } from './pedido/pedido.module';
import { ProductoController } from './producto/producto.controller';
import { MongooseModule } from '@nestjs/mongoose'
import { ProductoModule } from './producto/producto.module';
import { MdbModule } from './db/mdb/mdb.module';
import { CatService } from './cat/cat.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://95.111.235.214:32768/multivende_dev'), ProductoModule, MdbModule
  ],
  controllers: [AppController],
  providers: [AppService, CatService],
})
export class AppModule {}
