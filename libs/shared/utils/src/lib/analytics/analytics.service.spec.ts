import { async, TestBed } from '@angular/core/testing';
import { GoogleAnalyticsEvent } from '@nx-demo/shared/models';
import { AnalyticsService } from './analytics.service';

describe('AnalyticsService', () => {
  let service: AnalyticsService;
  let dataLayer: any[];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnalyticsService]
    });
    service = TestBed.inject(AnalyticsService);
    dataLayer = service['dataLayer']; // hack to access dataLayer prop
  });

  describe('trackEvent', () => {
    it('should update the dataLayer with a valid event', () => {
      const mockEvent = {
        action: 'test action',
        category: 'test',
        label: 'test',
        eventCallback: () => 'test callback'
      };
      service.trackEvent(mockEvent);
      const mockDataLayer = dataLayer.find(d => d.action);

      expect(mockDataLayer.action).toBe('test action');
      expect(mockDataLayer.action).not.toBe('something else');
    });

    it('should not update the dataLayer if an invalid event', () => {
      const mockEvent = { action: null, category: 'test', label: 'test' };
      const mockTrackEvent = service.trackEvent(mockEvent);

      expect(mockTrackEvent.isValid).toBeFalsy();
      expect(mockTrackEvent.dataLayerEvent.action).toBeNull();
    });
  });
});
