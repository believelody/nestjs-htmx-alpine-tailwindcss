import { Controller, Get, Render, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('products')
export class ApiProductsController {
  @Get('update-action')
  @Render('partials/product/action')
  updateAction(@Req() req: Request) {
    return { ...req.ctx, meta: req.session?.meta };
  }
}
