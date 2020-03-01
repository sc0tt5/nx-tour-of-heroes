/**
 * GA event tracking via GTM datalayer
 */
export function trackEvent(action: string, category: string, label: string): void {
  try {
    let isEventDone = false; // prevent double tracking when applicable
    const dataLayer = ((<any>window).dataLayer = (<any>window).dataLayer || []); // check if dataLayer loaded, if not then create it
    const data: Event | any =
      !!action && !!category && !!label
        ? {
            action,
            category,
            label,
            event: 'ngTrackEvent',
            eventCallback: null
          }
        : null;

    // if data hydrated then push
    if (data) {
      function callback() {
        if (!isEventDone) {
          dataLayer.push(data);
          isEventDone = true;
        }
      }

      if (callback) {
        data.eventCallback = callback;
      }

      dataLayer.push(data);
    }
  } catch (error) {
    console.log({ error });
  }
}
