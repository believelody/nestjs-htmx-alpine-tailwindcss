import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { FetchService } from 'src/common/fetch/fetch.service';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService, FetchService],
})
export class ProductsModule {}
