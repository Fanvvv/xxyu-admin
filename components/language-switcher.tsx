'use client';

import { useTransition } from 'react';
import { useParams } from 'next/navigation';
import { usePathname, useRouter, locales } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Languages } from 'lucide-react';

type localesItem = {
  value: (typeof locales)[number];
  label: string;
};

const localesNames: localesItem[] = [
  { value: 'zh', label: '中文' },
  { value: 'en', label: 'English' }
];

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const [isPending, startTransition] = useTransition();

  const handleLocaleChange = (newLocale: localesItem['value']) => {
    startTransition(() => {
      // @ts-expect-error
      router.replace({ pathname, params }, { locale: newLocale });
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" disabled={isPending}>
          <Languages className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {localesNames.map((item) => (
          <DropdownMenuItem
            key={item.value}
            onClick={() => handleLocaleChange(item.value)}
            className="cursor-pointer"
          >
            {item.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
