export interface GoogleAnalyticsEvent {
  event?: string;
  action: string;
  category: string;
  label: string;
  eventCallback?: () => void;
}
