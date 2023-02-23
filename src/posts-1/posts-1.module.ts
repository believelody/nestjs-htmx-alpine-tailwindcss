import { Module } from '@nestjs/common';
import { Posts1Controller } from './posts-1.controller';
import { FetchService } from 'src/common/fetch/fetch.service';
import { PostsService } from 'src/common/post/post.service';
import { UsersService } from 'src/users/users.service';

@Module({
  controllers: [Posts1Controller],
  providers: [FetchService, PostsService, UsersService],
})
export class Posts1Module {}
