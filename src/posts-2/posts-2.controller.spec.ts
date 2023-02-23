import { Test, TestingModule } from '@nestjs/testing';
import { Posts2Controller } from './posts-2.controller';
import { Posts2Service } from './posts-2.service';

describe('Posts2Controller', () => {
  let controller: Posts2Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Posts2Controller],
      providers: [Posts2Service],
    }).compile();

    controller = module.get<Posts2Controller>(Posts2Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
