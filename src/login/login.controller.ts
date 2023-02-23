import { Controller, Get, Render, Req } from '@nestjs/common';
import { Request } from 'express';
import { HeadMeta } from 'src/common/head-meta/head-meta.interface';

@Controller('login')
export class LoginController implements HeadMeta {
  title = '';

  @Get()
  @Render('pages/login')
  root(@Req() req: Request) {
    return { ...req.ctx, title: this.title };
  }
}
