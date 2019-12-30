import { Test, TestingModule } from '@nestjs/testing';
import { SharedDataAccessController } from './data-access.controller';
import { SharedDataAccessService } from './data-access.service';

describe('SharedDataAccessController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [SharedDataAccessController],
      providers: [SharedDataAccessService]
    }).compile();
  });

  describe('getMessage', () => {
    it('should return "Welcome to api!"', () => {
      const appController = app.get<SharedDataAccessController>(SharedDataAccessController);
      expect(appController.getMessage()).toEqual('Welcome to api!');
    });
  });

  describe('getPages', () => {
    it('should return 2 pages"', () => {
      const appController = app.get<SharedDataAccessController>(SharedDataAccessController);
      expect(appController.getPages().length).toBe(2);
    });
  });
});
