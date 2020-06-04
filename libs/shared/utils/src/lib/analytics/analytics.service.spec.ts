import { async, TestBed } from '@angular/core/testing';
import { AnalyticsService } from './analytics.service';
import { DataLayerEvent } from './data-layer-event';

describe('AnalyticsService', () => {
  let dataLayer;
  let service;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [AnalyticsService]
    });
    service = TestBed.inject(AnalyticsService);
    dataLayer = service['dataLayer']; // hack to access private property
  }));

  describe('trackEvent', () => {
    it('should update the dataLayer', () => {
      const mockEvent = new DataLayerEvent('test', 'test', 'test');
      service.trackEvent(mockEvent);
      const mockDataLayer = dataLayer.find(d => d.action);
      expect(mockDataLayer).toBe('test');
    });
  });
});
