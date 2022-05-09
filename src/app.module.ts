import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './servise/app.service';
import { ProductsService } from './servise/products.service';
import { ProductsController } from './products/products.controller';

@Module({
  imports: [],
  controllers: [AppController, ProductsController],
  providers: [AppService, ProductsService],
})
export class AppModule {}
