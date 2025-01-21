export interface Column<T> {
  key: string;
  title: string;
  dataIndex: keyof T;
  sortable?: boolean;
  render?: (value: any, record: T) => React.ReactNode;
  width?: number;
}

export interface DataTableProps<T> {
  columns: Column<T>[];
  dataSource: T[];
  rowKey: keyof T;
  loading?: boolean;
  showSelection?: boolean;
  selectedRows?: T[];
  onSelectionChange?: (selectedRows: T[]) => void;
  pagination?: {
    current: number;
    pageSize: number;
    total: number;
    pageSizes: number[];
    onChange: (page: number, pageSize: number) => void;
  };
  className?: string;
}
