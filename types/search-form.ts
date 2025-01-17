export type FieldType = 'text' | 'select' | 'date' | 'dateRange' | 'number';

export interface SelectOption {
  label: string;
  value: string | number;
}

export interface SearchField {
  key: string;
  label: string;
  type: FieldType;
  defaultValue?: any;
  options?: SelectOption[];
  placeholder?: string;
  rules?: {
    required?: boolean;
    min?: number;
    max?: number;
    pattern?: RegExp;
  };
}

export interface SearchFormProps {
  fields: SearchField[];
  onSearch: (values: Record<string, any>) => void;
  onReset?: () => void;
  className?: string;
}
