'use client';

import { Button } from '@/components/ui/button';
import useSeoMeta from '@/hooks/use-seo-meta';

export default function DashboardPage() {
  useSeoMeta('Dashboard');
  return (
    <div>
      <h1>Dashboard</h1>
      <Button>Click me</Button>
    </div>
  );
}
