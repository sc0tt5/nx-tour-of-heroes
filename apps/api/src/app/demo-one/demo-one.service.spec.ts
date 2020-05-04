import { Test } from '@nestjs/testing';
import { DemoOneService } from './demo-one.service';

describe('DemoOneService', () => {
  let service: DemoOneService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [DemoOneService]
    }).compile();

    service = app.get<DemoOneService>(DemoOneService);
  });

  describe('getPages', () => {
    it('should return an array of pages', () => {
      expect(service.getPages('page-one')).toBeTruthy();
    });
  });
});
