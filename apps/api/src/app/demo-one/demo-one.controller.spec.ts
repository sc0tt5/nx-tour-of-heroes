import { Test, TestingModule } from '@nestjs/testing';
import { DemoOneController } from './demo-one.controller';
import { DemoOneService } from './demo-one.service';

describe('DemoOneController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [DemoOneController],
      providers: [DemoOneService]
    }).compile();
  });

  describe('getPages', () => {
    it('should return 2 pages"', () => {
      const appController = app.get<DemoOneController>(DemoOneController);
      expect(appController.getPages('page-one')).toBeTruthy();
    });
  });
});
