import { Controller, Get, Render, Req } from '@nestjs/common';
import { Request } from 'express';
import { HomeService } from './home.service';

@Controller('home')
export class HomeController {
  title = 'A NestJS project with HTMX, tailwindcss and AlpineJS';
  constructor(private homeService: HomeService) {}

  @Get()
  @Render('pages/home')
  root(@Req() req: Request) {
    return { ...req.ctx, title: this.title };
  }
}
