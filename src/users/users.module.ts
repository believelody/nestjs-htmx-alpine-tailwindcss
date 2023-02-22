import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { FetchService } from 'src/common/fetch/fetch.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, FetchService],
})
export class UsersModule {}
