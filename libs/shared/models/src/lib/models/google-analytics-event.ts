export interface GoogleAnalyticsEvent {
  event?: string;
  action: string;
  category: string;
  label: string;
  eventCallback?: () => void;
}

export interface GoogleAnalyticsEventGroup {
  dataLayerEvent: GoogleAnalyticsEvent;
  isValid: boolean;
}
