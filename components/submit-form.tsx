'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { format } from 'date-fns';
import { CalendarIcon, Upload } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
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
import { Calendar } from '@/components/ui/calendar';
import { FileUploader } from '@/components/file-uploader';
import type { SubmitFormConfig, SubmitFormFieldConfig } from '@/types';

export function SubmitForm({
  fields,
  initialValues = {},
  onSubmit,
  submitText = '提交',
  cancelText = '取消',
  onCancel
}: SubmitFormConfig) {
  // 动态生成 schema
  const generateSchema = (fields: SubmitFormFieldConfig[]) => {
    const schema: Record<string, any> = {};

    fields.forEach((field) => {
      let fieldSchema;

      switch (field.type) {
        case 'text':
          fieldSchema = z.string();
          if (field.required)
            fieldSchema = fieldSchema.min(1, `${field.label}不能为空`);
          break;
        case 'textarea':
          fieldSchema = z.string();
          if (field.required)
            fieldSchema = fieldSchema.min(1, `${field.label}不能为空`);
          break;
        case 'number':
          fieldSchema = z.number();
          if (field.min !== undefined) fieldSchema = fieldSchema.min(field.min);
          if (field.max !== undefined) fieldSchema = fieldSchema.max(field.max);
          break;
        case 'select':
          fieldSchema = z.string();
          if (field.required)
            fieldSchema = fieldSchema.min(1, `${field.label}不能为空`);
          break;
        case 'radio':
          fieldSchema = z.string();
          if (field.required)
            fieldSchema = fieldSchema.min(1, `${field.label}不能为空`);
          break;
        case 'checkbox':
          fieldSchema = z.array(z.string());
          if (field.required)
            fieldSchema = fieldSchema.min(1, `${field.label}不能为空`);
          break;
        case 'date':
          fieldSchema = z.date();
          break;
        case 'upload':
          fieldSchema = z.array(z.any());
          break;
        default:
          fieldSchema = z.string();
      }

      schema[field.name] = field.required
        ? fieldSchema
        : fieldSchema.optional();
    });

    return z.object(schema);
  };

  const form = useForm({
    resolver: zodResolver(generateSchema(fields)),
    defaultValues: initialValues
  });

  const renderField = (field: SubmitFormFieldConfig) => {
    return (
      <FormField
        key={field.name}
        control={form.control}
        name={field.name}
        render={({ field: formField }) => (
          <FormItem>
            <FormLabel>{field.label}</FormLabel>
            <FormControl>
              {(() => {
                switch (field.type) {
                  case 'textarea':
                    return (
                      <Textarea
                        {...formField}
                        placeholder={field.placeholder}
                        rows={field.rows || 3}
                      />
                    );
                  case 'select':
                    return (
                      <Select
                        onValueChange={formField.onChange}
                        defaultValue={formField.value}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder={field.placeholder} />
                        </SelectTrigger>
                        <SelectContent>
                          {field.options?.map((option) => (
                            <SelectItem
                              key={option.value}
                              value={String(option.value)}
                            >
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    );
                  case 'radio':
                    return (
                      <RadioGroup
                        onValueChange={formField.onChange}
                        defaultValue={formField.value}
                        className="flex flex-col space-y-1"
                      >
                        {field.options?.map((option) => (
                          <FormItem
                            key={option.value}
                            className="flex items-center space-x-3 space-y-0"
                          >
                            <RadioGroupItem value={String(option.value)} />
                            <FormLabel className="font-normal">
                              {option.label}
                            </FormLabel>
                          </FormItem>
                        ))}
                      </RadioGroup>
                    );
                  case 'checkbox':
                    return (
                      <div className="flex flex-col space-y-2">
                        {field.options?.map((option) => (
                          <FormItem
                            key={option.value}
                            className="flex items-center space-x-3 space-y-0"
                          >
                            <Checkbox
                              checked={formField.value?.includes(
                                String(option.value)
                              )}
                              onCheckedChange={(checked) => {
                                const values = new Set(formField.value || []);
                                if (checked) {
                                  values.add(String(option.value));
                                } else {
                                  values.delete(String(option.value));
                                }
                                formField.onChange(Array.from(values));
                              }}
                            />
                            <FormLabel className="font-normal">
                              {option.label}
                            </FormLabel>
                          </FormItem>
                        ))}
                      </div>
                    );
                  case 'date':
                    return (
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant={'outline'}
                            className={cn(
                              'w-full pl-3 text-left font-normal',
                              !formField.value && 'text-muted-foreground'
                            )}
                          >
                            {formField.value ? (
                              format(formField.value, 'yyyy-MM-dd')
                            ) : (
                              <span>{field.placeholder}</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={formField.value}
                            onSelect={formField.onChange}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    );
                  case 'upload':
                    return (
                      <FileUploader
                        value={formField.value}
                        onChange={formField.onChange}
                        maxFiles={field.maxFiles || 4}
                        maxSize={field.maxSize || 4 * 1024 * 1024}
                        multiple={field.multiple || false}
                        isDisabled={field.disabled || false}
                        className={field.className}
                        progresses={field.progresses}
                      />
                    );
                  default:
                    return (
                      <Input
                        {...formField}
                        type={field.type}
                        placeholder={field.placeholder}
                      />
                    );
                }
              })()}
            </FormControl>
            {field.help && <FormDescription>{field.help}</FormDescription>}
            <FormMessage />
          </FormItem>
        )}
      />
    );
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {fields.map(renderField)}

        <div className="flex justify-end space-x-4">
          {onCancel && (
            <Button type="button" variant="outline" onClick={onCancel}>
              {cancelText}
            </Button>
          )}
          <Button type="submit">{submitText}</Button>
        </div>
      </form>
    </Form>
  );
}
