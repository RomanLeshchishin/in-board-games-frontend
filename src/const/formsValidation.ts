import { z } from 'zod';
import { Gender, HowOften, WhatDays } from '@/models/form/IForm';

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
  BIRTHDAY: z.coerce.date({
    invalid_type_error: 'Некорректная дата',
    required_error: 'Введите дату рождения',
  }),
  GENDER: z.nativeEnum(Gender, {
    errorMap: () => ({ message: 'Выберите пол' }),
  }),
  WHAT_DAYS: z.nativeEnum(WhatDays, {
    errorMap: () => ({ message: 'Выберите опцию' }),
  }),
  HOW_OFTEN: z.nativeEnum(HowOften, {
    errorMap: () => ({ message: 'Выберите опцию' }),
  }),
  FAVORITE_TIME: z.array(z.string()).min(1, 'Выберите хотя бы одно время'),
  PATRONYMIC: z.string().optional(),
  PHONE_NUMBER: z
    .string()
    .transform(val => val.replace(/\D/g, '')) // Удаляем все нецифровые символы
    .refine(val => val.length === 0 || val.length >= 10, {
      message: 'Номер должен содержать не менее 10 цифр',
    })
    .optional(),
  ADDRESS: z.string().optional(),
  ABOUT: z
    .string()
    .min(10, { message: 'Минимум 10 символов' })
    .max(500, { message: 'Максимум 500 символов' })
    .optional(),
  INSTITUTE: z.string().max(255, { message: 'Максимум 255 символов' }).optional(),
  COURSE: z
    .number()
    .min(1, { message: 'Курс должен быть от 1 до 10' })
    .max(10, { message: 'Курс должен быть от 1 до 10' })
    .optional(),
  DIRECTION: z.string().max(255, { message: 'Максимум 255 символов' }).optional(),
  PROFESSION: z.string().max(255, { message: 'Максимум 255 символов' }).optional(),
};
