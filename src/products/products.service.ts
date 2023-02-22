import { Injectable } from '@nestjs/common';
import { FetchService } from 'src/common/fetch/fetch.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(private fetchService: FetchService) {}

  create(createProductDto: CreateProductDto) {
    return 'This action adds a new product';
  }

  async findAll(limit: number, skip: number) {
    return await this.fetchService.get(
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
