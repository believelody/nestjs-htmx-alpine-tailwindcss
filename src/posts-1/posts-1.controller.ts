import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Render,
  Req,
} from '@nestjs/common';
import { Posts1Service } from './posts-1.service';
import { CreatePosts1Dto } from './dto/create-posts-1.dto';
import { UpdatePosts1Dto } from './dto/update-posts-1.dto';
import { Request } from 'express';
import queryUtil from 'src/utils/query.util';
import { HeadMeta } from 'src/common/head-meta/head-meta.interface';

@Controller('posts-1')
export class Posts1Controller implements HeadMeta {
  title = 'Posts with select pagination';
  constructor(private readonly posts1Service: Posts1Service) {}

  @Post()
  create(@Body() createPosts1Dto: CreatePosts1Dto) {
    return this.posts1Service.create(createPosts1Dto);
  }

  @Get()
  @Render('pages/posts-1')
  async findAll(@Req() req: Request) {
    const limit = Number(req.query.limit || queryUtil.limitQueryArray[0]);
    const page = Number(req.query.page) || 1;
    const { posts, total } = await this.posts1Service.findAll(
      limit,
      limit * (page - 1),
      'posts-1',
    );
    return {
      ...req.ctx,
      posts,
      meta: { pages: Math.round(total / limit), page, limit, total },
      title: this.title,
    };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.posts1Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePosts1Dto: UpdatePosts1Dto) {
    return this.posts1Service.update(+id, updatePosts1Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.posts1Service.remove(+id);
  }
}
