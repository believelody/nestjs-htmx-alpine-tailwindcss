import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AboutController } from './about/about.controller';
import { AboutModule } from './about/about.module';
import { AppController } from './app.controller';
import { HelpersModule } from './helpers/helpers.module';
import { HomeController } from './home/home.controller';
import { HomeModule } from './home/home.module';
import { CheckHtmxRequestMiddleware } from './middlewares/htmx/check-htmx-request.middleware';
import { ContactModule } from './contact/contact.module';
import { ContactController } from './contact/contact.controller';
import { TeamsModule } from './teams/teams.module';
import { TeamsController } from './teams/teams.controller';
import { ProductsModule } from './products/products.module';
import {
  LimitQueryValidatorMiddleware,
  PopulateCurrentURLInContextMiddleware,
} from './middlewares/http/http.middleware';
import { ProductsController } from './products/products.controller';
import { PopulateUserSessionInContextMiddleware } from './middlewares/session/session.middleware';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import appConfig from './app.config';
import { FetchService } from './common/fetch/fetch.service';
import { RouterModule } from '@nestjs/core';
import { ApiModule } from './api/api.module';
import { Posts1Module } from './posts-1/posts-1.module';
import { Posts1Controller } from './posts-1/posts-1.controller';
import { PostsService } from './common/post/post.service';

@Module({
  imports: [
    RouterModule.register([
      {
        path: 'api',
        module: ApiModule,
      },
    ]),
    ConfigModule.forRoot({ isGlobal: true, load: [appConfig] }),
    HelpersModule,
    AboutModule,
    HomeModule,
    ContactModule,
    TeamsModule,
    ProductsModule,
    UsersModule,
    ApiModule,
    Posts1Module,
  ],
  controllers: [AppController],
  providers: [FetchService, PostsService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(
        PopulateCurrentURLInContextMiddleware,
        CheckHtmxRequestMiddleware,
        PopulateUserSessionInContextMiddleware,
      )
      .forRoutes(
        AboutController,
        HomeController,
        ContactController,
        TeamsController,
        ProductsController,
        Posts1Controller,
      );

    consumer
      .apply(LimitQueryValidatorMiddleware)
      .forRoutes(
        { path: '/products', method: RequestMethod.GET },
        { path: '/posts-1', method: RequestMethod.GET },
      );
  }
}
