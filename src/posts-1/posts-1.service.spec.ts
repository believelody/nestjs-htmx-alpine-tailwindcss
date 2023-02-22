import { Test, TestingModule } from '@nestjs/testing';
import { Posts1Service } from './posts-1.service';

describe('Posts1Service', () => {
  let service: Posts1Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Posts1Service],
    }).compile();

    service = module.get<Posts1Service>(Posts1Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
