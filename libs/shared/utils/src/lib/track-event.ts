import { Event } from '@nx-demo/shared/models';

/**
 * GA event tracking via GTM datalayer
 */
export function trackEvent(
  action: string,
  category: string,
  label: string,
  callback?: () => void
): void {
  try {
    let isEventDone = false; // prevent double tracking when applicable
    const isValidEvent: boolean = !!action && !!category && !!label;

    if (isValidEvent && !isEventDone) {
      // check if dataLayer loaded, if not then create it
      const dataLayer: any = ((<any>window).dataLayer = (<any>window).dataLayer || []);
      // event data
      const data: Event = {
        action,
        category,
        label,
        eventCallback: callback || null,
        event: 'ngTrackEvent'
      };
      // push to dataLayer
      dataLayer.push(data);
      isEventDone = true;
    }
  } catch (error) {
    console.log({ error });
  }
}
