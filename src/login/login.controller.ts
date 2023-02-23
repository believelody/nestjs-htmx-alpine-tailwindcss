import { Controller, Get, Render, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('login')
export class LoginController {
  title = 'Login Page';

  @Get()
  @Render('pages/login')
  root(@Req() req: Request) {
    return { ...req.ctx, title: this.title };
  }
}
