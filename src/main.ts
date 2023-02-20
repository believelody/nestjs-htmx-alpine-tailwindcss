import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
import {
  array,
  misc,
  string,
  comparison,
  math,
  number,
  collection,
  object,
  html,
  regex,
  url,
} from 'useful-handlebars-helpers';
import { custom } from './helpers';
import * as hbs from 'express-hbs';
import { config } from './config';

const publicDir = join(__dirname, '..', 'public');
const viewsDir = join(__dirname, '..', 'views');
const partialsDir = join(__dirname, '..', 'views/partials');
const layoutsDir = join(__dirname, '..', 'views/layouts');

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  [
    array,
    misc,
    string,
    comparison,
    math,
    number,
    collection,
    object,
    html,
    regex,
    url,
    custom,
  ].forEach((helper) => hbs.registerHelper(helper));

  // => Here we expose the views so it can be rendered.
  app.engine('.hbs', hbs.express4({ partialsDir, layoutsDir }));
  app.set('view engine', '.hbs');
  app.useStaticAssets(publicDir, { prefix: '/public' });
  app.setBaseViewsDir(viewsDir);
  app.setViewEngine('hbs');

  await app.listen(config.port);
}
bootstrap();
