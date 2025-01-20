'use client';

import { useState } from 'react';
import { PageContainer } from '@/components/page-container';
import { Heading } from '@/components/ui/heading';
import { SearchForm } from '@/components/search-form';
import { DataTable } from '@/components/data-table';

import { searchFields, createColumns, type TableActions } from './page-config';
import useSeoMeta from '@/hooks/use-seo-meta';

export default function MusicPage() {
  useSeoMeta('Music');

  const handleSearch = (values: Record<string, any>) => {
    console.log('搜索参数：', values);
    // 执行搜索逻辑
  };

  // 表格数据
  const dataSource = [
    { id: 1, name: '张三', email: 'zhangsan@example.com', status: 'active' },
    { id: 2, name: '李四', email: 'lisi@example.com', status: 'inactive' }
  ];
  // 选中行数据
  const [selectedRows, setSelectedRows] = useState<any[]>([]);
  // 操作列函数
  const actions: TableActions = {
    handleEdit: (record: any) => {
      console.log('编辑', record);
    },
    handleDelete: (record: any) => {
      console.log('删除', record);
    }
  };
  // 表格列配置
  const columns = createColumns(actions);

  // 分页
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: 100
  });
  const handlePageChange = (page: number, pageSize: number) => {
    setPagination((prev) => ({
      ...prev,
      current: page,
      pageSize
    }));
    // 加载数据
  };

  return (
    <PageContainer scrollable={false}>
      <div className="flex flex-1 flex-col space-y-4">
        <div className="flex items-start justify-between">
          <Heading title="test" description="test" />
        </div>
        <SearchForm
          fields={searchFields}
          onSearch={handleSearch}
          onReset={() => console.log('重置')}
        />
        <DataTable
          columns={columns}
          dataSource={dataSource}
          rowKey="id"
          showSelection
          selectedRows={selectedRows}
          onSelectionChange={setSelectedRows}
          pagination={{
            ...pagination,
            onChange: handlePageChange
          }}
          loading={false}
          className="space-y-4"
        />
      </div>
    </PageContainer>
  );
}
