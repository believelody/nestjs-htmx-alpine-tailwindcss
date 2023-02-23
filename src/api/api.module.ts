import { Module } from '@nestjs/common';
import { ApiProductsController } from './products/products.controller';
import { ApiAuthController } from './auth/auth.controller';
import { ApiUserController } from './user/user.controller';
import { UsersService } from 'src/users/users.service';
import { FetchService } from 'src/common/fetch/fetch.service';
import { ApiCommentsController } from './comments/comments.controller';
import { PostsService } from 'src/common/post/post.service';

@Module({
  controllers: [
    ApiProductsController,
    ApiAuthController,
    ApiUserController,
    ApiCommentsController,
  ],
  providers: [UsersService, FetchService, PostsService],
})
export class ApiModule {}
