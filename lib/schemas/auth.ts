import * as z from 'zod';

export const loginSchema = z.object({
  username: z
    .string()
    .min(3, { message: '用户名至少需要3个字符' })
    .max(20, { message: '用户名不能超过20个字符' }),
  password: z
    .string()
    .min(6, { message: '密码至少需要6个字符' })
    .max(20, { message: '密码不能超过20个字符' })
});

export type LoginSchema = z.infer<typeof loginSchema>;
