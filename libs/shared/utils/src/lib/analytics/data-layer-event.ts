import { Event } from '@nx-demo/shared/models';

/**
 * Constructor for new dataLayer events.
 */
export class DataLayerEvent implements Event {
  constructor(
    public readonly action: string = '',
    public readonly category: string = '',
    public readonly label: string = '',
    public readonly event: string = 'ngTrackEvent'
  ) {}
}
