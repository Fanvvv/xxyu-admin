'use client';

import { useState, useCallback } from 'react';
import { Calendar } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { useDebouncedCallback } from 'use-debounce';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { Label } from '@/components/ui/label';
import type { SearchFormProps, SearchField } from '@/types';

export function SearchForm({
  fields,
  onSearch,
  onReset,
  className
}: SearchFormProps) {
  // 初始化表单状态
  const initialValues = fields.reduce(
    (acc, field) => {
      acc[field.key] = field.defaultValue ?? '';
      return acc;
    },
    {} as Record<string, any>
  );

  const [values, setValues] = useState(initialValues);

  // 防抖处理搜索
  const debouncedSearch = useDebouncedCallback(
    (searchValues: Record<string, any>) => {
      onSearch(searchValues);
    },
    500
  );

  // 更新字段值
  const handleFieldChange = useCallback(
    (key: string, value: any) => {
      setValues((prev) => {
        const newValues = { ...prev, [key]: value };
        debouncedSearch(newValues);
        return newValues;
      });
    },
    [debouncedSearch]
  );

  // 渲染表单项
  const renderField = (field: SearchField) => {
    const value = values[field.key];

    switch (field.type) {
      case 'text':
        return (
          <Input
            value={value}
            onChange={(e) => handleFieldChange(field.key, e.target.value)}
            placeholder={field.placeholder}
            className="w-[200px]"
          />
        );

      case 'select':
        return (
          <Select
            value={value}
            onValueChange={(newValue) => handleFieldChange(field.key, newValue)}
          >
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder={field.placeholder} />
            </SelectTrigger>
            <SelectContent>
              {field.options?.map((option) => (
                <SelectItem key={option.value} value={String(option.value)}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );

      case 'date':
        return (
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  'w-[200px] justify-start text-left font-normal',
                  !value && 'text-muted-foreground'
                )}
              >
                <Calendar className="mr-2 h-4 w-4" />
                {value ? format(new Date(value), 'PPP') : field.placeholder}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <CalendarComponent
                mode="single"
                selected={value ? new Date(value) : undefined}
                onSelect={(date) => {
                  const dateStr = date ? format(date, 'yyyy-MM-dd') : '';
                  handleFieldChange(field.key, dateStr);
                }}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        );

      case 'number':
        return (
          <Input
            type="number"
            value={value}
            onChange={(e) =>
              handleFieldChange(
                field.key,
                e.target.value ? Number(e.target.value) : ''
              )
            }
            placeholder={field.placeholder}
            className="w-[200px]"
          />
        );

      default:
        return null;
    }
  };

  // 重置处理
  const handleReset = () => {
    setValues(initialValues);
    onReset?.();
  };

  return (
    <div className={cn('flex flex-wrap gap-4', className)}>
      {fields.map((field) => (
        <div key={field.key} className="flex items-center gap-2">
          <Label className="w-20 text-right">{field.label}</Label>
          {renderField(field)}
        </div>
      ))}
      <Button variant="outline" onClick={handleReset}>
        重置
      </Button>
    </div>
  );
}
