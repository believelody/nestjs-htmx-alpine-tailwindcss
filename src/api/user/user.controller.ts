import { Controller, Get, Render, Req } from '@nestjs/common';
import { Request } from 'express';
import { UsersService } from 'src/users/users.service';

@Controller('users')
export class ApiUserController {
  constructor(private usersService: UsersService) {}

  @Get(':id/author-name')
  @Render('partials/element/author')
  async findAuthor(@Req() req: Request) {
    const { id } = req.params;
    const author = await this.usersService.findAuthor(Number(id));
    return { ...req.ctx, author };
  }
}
