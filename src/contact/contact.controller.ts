import { Controller, Get, Render, Req } from '@nestjs/common';
import { Request } from 'express';

export const contactTitle = 'Contact Us';

@Controller('contact')
export class ContactController {
  @Get()
  @Render('pages/contact')
  root(@Req() req: Request) {
    return { titcle: contactTitle, ...req.ctx };
  }
}
