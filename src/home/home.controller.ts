import { Controller, Get, Render, Req } from '@nestjs/common';
import { Request } from 'express';
import { HomeService } from './home.service';

@Controller('home')
export class HomeController {
  constructor(private homeService: HomeService) {}

  @Get()
  @Render('pages/home')
  root(@Req() req: Request) {
    return { ...this.homeService.getName(), ...req.ctx };
  }
}
