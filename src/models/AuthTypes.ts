import { z } from 'zod';
import { FormSchemas } from '@/const/forms';

export const RegisterSchema = z.object({
  firstName: FormSchemas.FIRST_NAME,
  lastName: FormSchemas.LAST_NAME,
  email: FormSchemas.EMAIL,
  password: FormSchemas.PASSWORD
});

export const LoginSchema = z.object({
  email: FormSchemas.EMAIL,
  password: FormSchemas.PASSWORD
});

export type RegisterFormData = z.infer<typeof RegisterSchema>;

export type LoginFormData = z.infer<typeof LoginSchema>;


