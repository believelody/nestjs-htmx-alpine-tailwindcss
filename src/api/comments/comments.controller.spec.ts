import { Test, TestingModule } from '@nestjs/testing';
import { ApiCommentsController } from './comments.controller';

describe('ApiCommentsController', () => {
  let controller: ApiCommentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApiCommentsController],
    }).compile();

    controller = module.get<ApiCommentsController>(ApiCommentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
