import { Test, TestingModule } from '@nestjs/testing';
import { tap } from 'rxjs/operators';
import { AppController } from './app.controller';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController]
    }).compile();
  });

  describe('getPages', () => {
    it('should return 2 pages', () => {
      const appController = app.get<AppController>(AppController);
      appController.getPages().pipe(
        tap(result => {
          expect(result.length).toBe(2);
        })
      );
    });
  });
});
