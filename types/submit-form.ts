export type SubmitFormFieldType =
  | 'text'
  | 'textarea'
  | 'select'
  | 'radio'
  | 'checkbox'
  | 'date'
  | 'upload'
  | 'number';

export interface SubmitFormSelectOption {
  label: string;
  value: string | number;
}

export interface SubmitFormFieldConfig {
  name: string;
  label: string;
  type: SubmitFormFieldType;
  placeholder?: string;
  required?: boolean;
  options?: SubmitFormSelectOption[];
  min?: number;
  max?: number;
  rows?: number;
  disabled?: boolean;
  maxFiles?: number;
  maxSize?: number;
  multiple?: boolean;
  className?: string;
  progresses?: Record<string, number>;
  help?: string;
}

export interface SubmitFormConfig {
  fields: SubmitFormFieldConfig[];
  initialValues?: Record<string, any>;
  onSubmit: (values: any) => void;
  submitText?: string;
  cancelText?: string;
  onCancel?: () => void;
}
