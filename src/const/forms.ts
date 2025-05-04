import { z } from 'zod';

export const FormSchemas = {
  FIRST_NAME: z.string().min(1, { message: 'Введите имя' }),
  LAST_NAME: z.string().min(1, { message: 'Введите фамилию' }),
  EMAIL: z.string().email({ message: 'Неверный формат почты' }),
  PASSWORD: z
  .string()
  .min(6, { message: 'Минимум 6 символов' })
  .regex(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/,
    'Пароль должен содержать строчные, заглавные буквы, цифру и спецсимвол',
  ),
};
