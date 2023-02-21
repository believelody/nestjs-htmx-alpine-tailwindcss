import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Render,
  Req,
  Res,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Request, Response } from 'express';
import queryUtil from 'src/utils/query.util';
import { ProductResponse } from './products.interface';

export const productsTitle = 'Products';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  @Render('pages/products')
  async findAll(@Req() req: Request, @Res() res: Response) {
    const limit = Number(req.query.limit || queryUtil.limitQueryArray[0]);
    const count = Number(req.query.count || limit);
    if (req.query.count && req.ctx?.fromHTMX) {
      const { products, total } = (await this.productsService.findAll(
        limit,
        count - limit,
      )) as ProductResponse;
      if (req.session) {
        req.session.meta = { total, limit, count };
      }
      res.setHeader('HX-Trigger', 'update-context');
      return res.render('partials/product/list', {
        ...req.ctx,
        meta: { total, limit, count },
        products,
      });
    }
    const { products, total } = (await this.productsService.findAll(
      count,
      0,
    )) as ProductResponse;
    return res.render('pages/product', {
      ...req.ctx,
      products,
      meta: { total, limit, count },
      title: productsTitle,
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(+id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
