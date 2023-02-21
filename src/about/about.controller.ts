import { Controller, Get, Render, Req } from '@nestjs/common';
import { Request } from 'express';
import { AboutService } from './about.service';

const aboutTitle = 'About';

@Controller('about')
export class AboutController {
  constructor(private aboutService: AboutService) {}
  @Get()
  @Render('pages/about')
  async fetchAll(@Req() req: Request) {
    const cards = await this.aboutService.fetchAll();
    return { cards, title: aboutTitle, ...req.ctx };
  }
}
