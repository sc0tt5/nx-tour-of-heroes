import { Resource } from './resource';

export interface PageOne extends Resource {
  name: string;
  content: string;
  accordionItems: any[];
}

export interface PageTwo extends Resource {
  name: string;
  content: string;
  accordionItems: any[];
}
