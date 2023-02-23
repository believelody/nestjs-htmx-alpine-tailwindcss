import { Module } from '@nestjs/common';
import { Posts2Controller } from './posts-2.controller';
import { FetchService } from 'src/common/fetch/fetch.service';
import { PostsService } from 'src/common/post/post.service';
import { UsersService } from 'src/users/users.service';

@Module({
  controllers: [Posts2Controller],
  providers: [FetchService, PostsService, UsersService],
})
export class Posts2Module {}
