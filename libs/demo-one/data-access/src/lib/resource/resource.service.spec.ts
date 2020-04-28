import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';
import { PageOne } from '@nx-demo/shared/models';
import { ResourceService } from './resource.service';

export class MockService extends ResourceService<PageOne> {
  constructor(private httpClient: HttpClient) {
    super(httpClient, '/api/pages');
  }
}

describe('ResourceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockService],
      imports: [HttpClientTestingModule]
    });
  });

  // check all expectations - URL called, HTTP method, etc.
  afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
    httpMock.verify();
  }));

  it('should fetch the page data', () => {
    inject(
      [HttpTestingController, MockService],
      (httpMock: HttpTestingController, service: MockService) => {
        // call the service
        service.read('page-one').subscribe(data => {
          expect(data).toBeDefined();
          expect(data.accordionItems.length).toBeGreaterThan(0);
        });

        // set the expectations for the HttpClient mock
        const http = httpMock.expectOne('/api/pages');
        expect(http.request.method).toEqual('GET');

        // set the fake data to be returned by the mock
        http.flush({
          data: {
            param: 'page-one',
            name: 'Page 1',
            content: 'Page 1 content...',
            accordionItems: [
              { header: 'header 1', content: 'content 1' },
              { header: 'header 2', content: 'content 2' },
              { header: 'header 3', content: 'content 3' }
            ]
          }
        });
      }
    );
  });
});
