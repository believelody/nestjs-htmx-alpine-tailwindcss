import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AboutController } from './about/about.controller';
import { AboutModule } from './about/about.module';
import { AppController } from './app.controller';
import { HelpersModule } from './helpers/helpers.module';
import { HomeController } from './home/home.controller';
import { HomeModule } from './home/home.module';
import { CheckHtmxRequestMiddleware } from './middlewares/check-htmx-request/check-htmx-request.middleware';
import { ContactModule } from './contact/contact.module';
import { ContactController } from './contact/contact.controller';
import { TeamsModule } from './teams/teams.module';
import { TeamsController } from './teams/teams.controller';

@Module({
  imports: [HelpersModule, AboutModule, HomeModule, ContactModule, TeamsModule],
  controllers: [AppController],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CheckHtmxRequestMiddleware)
      .forRoutes(AboutController, HomeController, ContactController, TeamsController);
  }
}
