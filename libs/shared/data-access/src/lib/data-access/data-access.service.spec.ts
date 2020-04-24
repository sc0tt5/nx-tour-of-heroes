import { Test } from '@nestjs/testing';
import { SharedDataAccessService } from './data-access.service';

describe('SharedDataAccessService', () => {
  let service: SharedDataAccessService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [SharedDataAccessService]
    }).compile();

    service = app.get<SharedDataAccessService>(SharedDataAccessService);
  });

  describe('getPages', () => {
    it('should return an array of pages', () => {
      expect(service.getPages('page-one')).toBeTruthy();
    });
  });
});
