import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

import { GoogleAnalyticsEvent, GoogleAnalyticsEventGroup } from '@nx-toh/shared/models';

import { WindowRefService } from '../window-ref/window-ref.service';

/**
 * Google Analytics event tracking via Google Tag Manager dataLayer.
 * @class AnalyticsService
 */
@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  private readonly dataLayer: GoogleAnalyticsEvent[];

  /**
   * Should not run server-side, but in case it does this. will return an empty array.
   */
  constructor(@Inject(PLATFORM_ID) protected platformId: unknown, private windowRef: WindowRefService) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    this.dataLayer = (isPlatformBrowser(this.platformId) && windowRef.nativeWindow.dataLayer) || [];
  }

  /**
   * Send event to Google Tag Manager dataLayer.
   * @param {GoogleAnalyticsEvent} event The event data object to push to the dataLayer.
   */
  trackEvent(event: GoogleAnalyticsEvent): GoogleAnalyticsEventGroup {
    const dataLayerEvent = this.setEvent(event);
    const isValid = this.validateEventData(event);
    let isEventDone = false; // prevent double tracking when applicable

    if (isValid && !isEventDone) {
      this.dataLayer.push(dataLayerEvent);
      isEventDone = true;
    }

    return { dataLayerEvent, isValid };
  }

  /**
   * Build data object that will be pushed to the dataLayer.
   * @param {GoogleAnalyticsEvent} event The event action, category, and label to set.
   */
  private setEvent(event: GoogleAnalyticsEvent) {
    const dataLayerEvent: GoogleAnalyticsEvent = {
      event: 'ngTrackEvent',
      ...event
    };

    // only add callback if requested
    if (event.eventCallback) {
      dataLayerEvent.eventCallback = event.eventCallback;
    }

    return dataLayerEvent;
  }

  /**
   * Check if valid event.
   * @param {GoogleAnalyticsEvent} event The event action, category, and label to validate.
   */
  private validateEventData(event: GoogleAnalyticsEvent): boolean {
    return !!event.action && !!event.category && !!event.label;
  }
}
