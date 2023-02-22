import { Test, TestingModule } from '@nestjs/testing';
import { Posts1Controller } from './posts-1.controller';
import { Posts1Service } from './posts-1.service';

describe('Posts1Controller', () => {
  let controller: Posts1Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Posts1Controller],
      providers: [Posts1Service],
    }).compile();

    controller = module.get<Posts1Controller>(Posts1Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
