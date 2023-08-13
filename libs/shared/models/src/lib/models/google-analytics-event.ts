export interface GoogleAnalyticsEvent {
  action: string;
  category: string;
  label: string;
  event?: string;
  eventCallback?: () => void;
}

export interface GoogleAnalyticsEventGroup {
  dataLayerEvent: GoogleAnalyticsEvent;
  isValid: boolean;
}
