import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController]
    }).compile();
  });

  describe('getMessage', () => {
    it('should return "Welcome to api!"', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.getMessage()).toEqual({ message: 'Welcome to api!' });
    });
  });

  describe('getPages', () => {
    it('should return 2 pages', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.getPages().length).toBe(2);
    });
  });
});
