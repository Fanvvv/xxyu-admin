import type { SubmitFormConfig } from '@/types';

export const formConfig: SubmitFormConfig = {
  fields: [
    {
      name: 'title',
      label: '项目名称',
      type: 'text',
      required: true,
      placeholder: '请输入项目名称'
    },
    {
      name: 'description',
      label: '项目描述',
      type: 'textarea',
      required: true,
      placeholder: '请输入项目描述',
      rows: 4
    },
    {
      name: 'type',
      label: '项目类型',
      type: 'radio',
      required: true,
      options: [
        { label: '个人项目', value: 'personal' },
        { label: '团队项目', value: 'team' }
      ]
    },
    {
      name: 'status',
      label: '项目状态',
      type: 'select',
      required: true,
      options: [
        { label: '规划中', value: 'planning' },
        { label: '进行中', value: 'in-progress' },
        { label: '已完成', value: 'completed' }
      ]
    },
    {
      name: 'tags',
      label: '项目标签',
      type: 'checkbox',
      options: [
        { label: '前端', value: 'frontend' },
        { label: '后端', value: 'backend' },
        { label: '设计', value: 'design' }
      ]
    },
    {
      name: 'startDate',
      label: '开始日期',
      type: 'date',
      required: true,
      placeholder: '请选择开始日期'
    }
  ],
  initialValues: {
    type: 'personal',
    tags: ['frontend']
  },
  onSubmit: () => {},
  onCancel: () => {}
};
