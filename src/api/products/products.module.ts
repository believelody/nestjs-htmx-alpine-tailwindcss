import { Module } from '@nestjs/common';
import { ApiProductsController } from './products.controller';

@Module({
  controllers: [ApiProductsController],
})
export class ApiProductsModule {}
