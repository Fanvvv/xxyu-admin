import BaseLayout from '@/components/layout/base-layout';

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export default function LoginLayout({ children, params: { locale } }: Props) {
  return (
    <BaseLayout sidebar={false} locale={locale}>
      {children}
    </BaseLayout>
  );
}
