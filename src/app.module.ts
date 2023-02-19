import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AboutController } from './about/about.controller';
import { AboutModule } from './about/about.module';
import { AppController } from './app.controller';
import { HelpersModule } from './helpers/helpers.module';
import { HomeController } from './home/home.controller';
import { HomeModule } from './home/home.module';
import { CheckHtmxRequestMiddleware } from './middlewares/check-htmx-request/check-htmx-request.middleware';
import { ContactModule } from './contact/contact.module';

@Module({
  imports: [HelpersModule, AboutModule, HomeModule, ContactModule],
  controllers: [AppController],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CheckHtmxRequestMiddleware)
      .forRoutes(AboutController, HomeController, HomeController);
  }
}
