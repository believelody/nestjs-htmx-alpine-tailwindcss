import { Controller, Get, Render, Req } from '@nestjs/common';
import { Request } from 'express';
import { AboutService } from './about.service';

@Controller('about')
export class AboutController {
  constructor(private aboutService: AboutService) {}
  @Get()
  @Render('pages/about')
  async fetchAll(@Req() req: Request & { ctx?: any }) {
    const cards = await this.aboutService.fetchAll();
    console.log(req.ctx);
    return { cards, title: 'About', ...req.ctx };
  }
}
