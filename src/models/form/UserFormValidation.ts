import { FormSchemas } from '@/const/formsValidation';
import { z } from 'zod';

export const CreateFormSchema = z.object({
  birthday: FormSchemas.BIRTHDAY,
  gender: FormSchemas.GENDER,
  whatDays: FormSchemas.WHAT_DAYS,
  howOften: FormSchemas.HOW_OFTEN,
  favoriteTime: FormSchemas.FAVORITE_TIME,
  patronymic: FormSchemas.PATRONYMIC,
  phoneNumber: FormSchemas.PHONE_NUMBER,
  address: FormSchemas.ADDRESS,
  institute: FormSchemas.INSTITUTE,
  course: FormSchemas.COURSE,
  direction: FormSchemas.DIRECTION,
  profession: FormSchemas.PROFESSION,
});

export type CreateFormData = z.infer<typeof CreateFormSchema>;
