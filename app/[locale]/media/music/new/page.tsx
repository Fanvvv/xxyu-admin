'use client';

// 新增和修改信息页面
import * as z from 'zod';
import { PageContainer } from '@/components/page-container';
import { Heading } from '@/components/ui/heading';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { SubmitForm } from '@/components/submit-form';
import { formConfig } from './page-config';

// 定义表单验证模式
const formSchema = z.object({
  title: z.string().min(2, '标题至少2个字符'),
  description: z.string().min(10, '描述至少10个字符'),
  type: z.string(),
  categories: z.array(z.string()).min(1, '至少选择一个类别'),
  date: z.date(),
  status: z.string(),
  files: z.array(z.string()),
  image: z.any()
});

export default function NewMusicForm() {
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  function onCancel() {
    console.log('取消');
  }

  formConfig.onSubmit = onSubmit;
  formConfig.onCancel = onCancel;

  return (
    <PageContainer scrollable={true}>
      <div className="flex-1 space-y-6">
        <Card className="mx-auto w-full">
          <CardHeader>
            <Heading title="新增" description="请填写详细信息" />
          </CardHeader>
          <CardContent>
            <SubmitForm {...formConfig} />
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  );
}
