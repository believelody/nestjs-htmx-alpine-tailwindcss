import { Module } from '@nestjs/common';
import { ApiProductsController } from './products/products.controller';

@Module({
  controllers: [ApiProductsController],
})
export class ApiModule {}
