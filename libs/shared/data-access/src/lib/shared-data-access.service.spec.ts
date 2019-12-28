import { Test } from '@nestjs/testing';
import { SharedDataAccessService } from './shared-data-access.service';

describe('SharedDataAccessService', () => {
  let service: SharedDataAccessService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [SharedDataAccessService]
    }).compile();

    service = app.get<SharedDataAccessService>(SharedDataAccessService);
  });

  describe('getMessage', () => {
    it('should return "Welcome to api!"', () => {
      expect(service.getMessage()).toEqual({ message: 'Welcome to api!' });
    });
  });

  describe('getPages', () => {
    it('should return an array of pages', () => {
      expect(service.getPages().length).toBe(2);
    });
  });
});
