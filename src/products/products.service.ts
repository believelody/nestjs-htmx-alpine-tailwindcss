import { Injectable } from '@nestjs/common';
import { fetch } from 'src/fetch';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  create(createProductDto: CreateProductDto) {
    return 'This action adds a new product';
  }

  async findAll(limit: number, skip: number) {
    return await fetch.get(
      `/products?limit=${limit}&skip=${skip}&select=title,price,rating,category,brand,thumbnail`,
    );
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
