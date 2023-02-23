import { Controller, Get, Render, Req } from '@nestjs/common';
import { Request } from 'express';
import { AboutService } from './about.service';

@Controller('about')
export class AboutController {
  title = 'About';
  constructor(private aboutService: AboutService) {}
  @Get()
  @Render('pages/about')
  async fetchAll(@Req() req: Request) {
    const cards = await this.aboutService.fetchAll();
    return { cards, title: this.title, ...req.ctx };
  }
}
