export interface Event {
  action: string;
  category: string;
  label: string;
  event?: string;
  callback?: () => void;
}
