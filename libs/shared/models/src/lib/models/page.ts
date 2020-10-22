import { Resource } from './resource';

export enum ContentType {
  FORM,
  STRING
}

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
