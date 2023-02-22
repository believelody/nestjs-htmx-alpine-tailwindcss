import { Test, TestingModule } from '@nestjs/testing';
import { ApiProductsController } from './products.controller';

describe('ApiProductsController', () => {
  let controller: ApiProductsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApiProductsController],
    }).compile();

    controller = module.get<ApiProductsController>(ApiProductsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
