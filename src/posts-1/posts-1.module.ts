import { Module } from '@nestjs/common';
import { Posts1Service } from './posts-1.service';
import { Posts1Controller } from './posts-1.controller';
import { FetchService } from 'src/common/fetch/fetch.service';

@Module({
  controllers: [Posts1Controller],
  providers: [Posts1Service, FetchService],
})
export class Posts1Module {}
