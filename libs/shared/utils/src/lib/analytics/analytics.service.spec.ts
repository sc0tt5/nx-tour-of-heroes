import { async, TestBed } from '@angular/core/testing';
import { GoogleAnalyticsEvent } from '@nx-demo/shared/models';
import { AnalyticsService } from './analytics.service';

const mockEvent: GoogleAnalyticsEvent = {
  action: 'test action',
  category: 'test category',
  label: 'test label',
  eventCallback: () => 'test callback'
};

describe('AnalyticsService', () => {
  let service: AnalyticsService;
  let dataLayer: any[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [AnalyticsService]
    });
    service = TestBed.inject(AnalyticsService);
    dataLayer = service['dataLayer']; // hack to access dataLayer prop
  }));

  describe('trackEvent', () => {
    it('should update the dataLayer', () => {
      service.trackEvent(mockEvent);
      const mockDataLayer = dataLayer.find(d => d.action);
      expect(mockDataLayer.action).toBe('test action');
    });
  });
});
