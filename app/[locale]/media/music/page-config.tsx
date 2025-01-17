import { Button } from '@/components/ui/button';
import { SearchField } from '@/types';

export const searchFields: SearchField[] = [
  {
    key: 'keyword',
    label: '关键词',
    type: 'text',
    placeholder: '请输入关键词',
    defaultValue: ''
  },
  {
    key: 'status',
    label: '状态',
    type: 'select',
    options: [
      { label: '全部', value: 'all' },
      { label: '进行中', value: 'processing' },
      { label: '已完成', value: 'completed' }
    ],
    defaultValue: 'all',
    placeholder: '请选择状态'
  },
  {
    key: 'date',
    label: '日期',
    type: 'date',
    placeholder: '选择日期'
  },
  {
    key: 'amount',
    label: '金额',
    type: 'number',
    placeholder: '请输入金额',
    defaultValue: '',
    rules: {
      min: 0,
      max: 1000000
    }
  }
];

// 定义操作类型
export interface TableActions {
  handleEdit: (record: any) => void;
  handleDelete: (record: any) => void;
}

// 创建列配置函数
export const createColumns = (actions: TableActions) => [
  {
    key: 'name',
    title: '姓名',
    dataIndex: 'name',
    sortable: true
  },
  {
    key: 'email',
    title: '邮箱',
    dataIndex: 'email'
  },
  {
    key: 'status',
    title: '状态',
    dataIndex: 'status',
    render: (value: string) => (
      <span className={value === 'active' ? 'text-green-500' : 'text-red-500'}>
        {value === 'active' ? '活跃' : '停用'}
      </span>
    )
  },
  {
    key: 'action',
    title: '操作',
    dataIndex: 'id',
    render: (_: any, record: any) => (
      <div className="flex space-x-2">
        <Button size="sm" onClick={() => actions.handleEdit(record)}>
          编辑
        </Button>
        <Button
          size="sm"
          variant="destructive"
          onClick={() => actions.handleDelete(record)}
        >
          删除
        </Button>
      </div>
    )
  }
];
