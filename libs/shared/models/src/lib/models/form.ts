export enum FieldType {
  CHECKBOX,
  NUMBER,
  RADIO,
  SELECTDROPDOWN,
  TEXTAREA,
  TEXTFIELD
}

export interface Field {
  name: string;
  type: FieldType;
  children?: Field[];
  disabled?: boolean;
  label?: string;
  options?: string[];
  parent?: string;
  placeholder?: string;
  required?: boolean;
  value?: number | string;
  visible?: boolean;
}

export interface KeyValuePair {
  key: string;
  value: number | string;
}
