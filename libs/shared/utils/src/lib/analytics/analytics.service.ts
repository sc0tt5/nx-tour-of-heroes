import { Injectable } from '@angular/core';
import { Event } from '@nx-demo/shared/models';
import { DataLayerEvent } from './data-layer-event';

/**
 * Google Analytics event tracking via Google Tag Manager datalayer.
 * @class AnalyticsService
 */
@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  private readonly dataLayer: DataLayerEvent[];

  constructor() {
    this.dataLayer = (<any>window).dataLayer = (<any>window).dataLayer || [];
  }

  /**
   * Send event to Google Tag Manager dataLayer.
   * @param {DataLayerEvent} event The event data object to push to the dataLayer.
   */
  trackEvent(event: Event): void {
    const dataLayerEvent = new DataLayerEvent(event.action, event.category, event.label);
    let isEventDone = false; // prevent double tracking when applicable
    const isValidEvent = this.validateEventData(event.action, event.category, event.label);

    if (isValidEvent && !isEventDone) {
      this.dataLayer.push(dataLayerEvent);
      isEventDone = true;
    }
  }

  /**
   * Check if valid event.
   * @param {string} action The action to check.
   * @param {string} category The category to check.
   * @param {string} label The label to check.
   */
  private validateEventData(action: string, category: string, label: string): boolean {
    return !!action && !!category && !!label;
  }
}
