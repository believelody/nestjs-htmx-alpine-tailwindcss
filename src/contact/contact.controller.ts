import { Controller, Get, Render, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('contact')
export class ContactController {
  title = 'Contact Us';

  @Get()
  @Render('pages/contact')
  root(@Req() req: Request) {
    return { title: this.title, ...req.ctx };
  }
}
