import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { NGXLogger } from 'ngx-logger';

import { ServerInterceptor } from './server.interceptor';

describe('ServerInterceptor', () => {
  let interceptor: ServerInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ServerInterceptor, { provide: NGXLogger, useFactory: () => ({ error: jest.fn() }) }],
      teardown: { destroyAfterEach: false }
    });

    interceptor = TestBed.inject(ServerInterceptor);
  });

  it('should create', () => {
    expect(interceptor).toBeTruthy();
  });

  // todo: unit tests
});
