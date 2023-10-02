import { Test } from '@nestjs/testing';

import { HttpErrorFilter } from './http-error.filter';

describe('HttpErrorFilter', () => {
  let filter: HttpErrorFilter;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      providers: [HttpErrorFilter]
    }).compile();

    filter = module.get(HttpErrorFilter);
  });

  it('should create', () => {
    expect(filter).toBeTruthy();
  });

  // todo: unit tests
});
