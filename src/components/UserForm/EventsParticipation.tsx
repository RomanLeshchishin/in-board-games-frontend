import styles from './UserForm.module.scss';
import { Select } from 'antd';
import React from 'react';
import { daysOptions, frequencyOptions } from '@/const/userFormOptions';
import { FieldErrors, UseFormSetValue } from 'react-hook-form';
import { CreateFormData } from '@/models/form/UserFormValidation';

interface IEventsParticipationProps {
  errors: FieldErrors<CreateFormData>;
  setValue: UseFormSetValue<CreateFormData>;
  formValues: CreateFormData;
}

const EventsParticipation = ({ errors, setValue, formValues }: IEventsParticipationProps) => {
  return (
    <section className={styles.section}>
      <h2>Участие в мероприятиях</h2>
      <div className={styles.row}>
        <div className={styles.inputWrapper}>
          <Select
            className={styles.fullWidth}
            options={frequencyOptions}
            status={errors.howOften ? 'error' : ''}
            value={formValues.howOften}
            onChange={value => setValue('howOften', value)}
          />
          {errors.howOften && <span className={styles.error}>{errors.howOften.message}</span>}
        </div>
        <div className={styles.inputWrapper}>
          <Select
            className={styles.fullWidth}
            placeholder={'Дни недели'}
            options={daysOptions}
            status={errors.whatDays ? 'error' : ''}
            value={formValues.whatDays}
            onChange={value => setValue('whatDays', value)}
          />
          {errors.whatDays && <span className={styles.error}>{errors.whatDays.message}</span>}
        </div>
        <div className={styles.inputWrapper}>
          <Select
            mode={'multiple'}
            placeholder={'Выберите время'}
            options={Array.from({ length: 24 }, (_, i) => ({
              value: `${i.toString().padStart(2, '0')}:00`,
              label: `${i}:00`,
            }))}
            value={formValues.favoriteTime}
            onChange={values => setValue('favoriteTime', values)}
          />
          {errors.favoriteTime && <span className={styles.error}>{errors.favoriteTime.message}</span>}
        </div>
      </div>
    </section>
  );
};

export default EventsParticipation;
