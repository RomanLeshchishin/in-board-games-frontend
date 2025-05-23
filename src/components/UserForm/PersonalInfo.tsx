import styles from './UserForm.module.scss';
import { CustomInput } from '@/components/UI/CustomInput/CustomInput';
import { DatePicker, Radio } from 'antd';
import dayjs from 'dayjs';
import { PhoneOutlined } from '@ant-design/icons';
import React from 'react';
import { CreateFormData } from '@/models/form/UserFormValidation';
import { FieldErrors, UseFormRegister, UseFormSetValue } from 'react-hook-form';

interface IPersonalInfoProps {
  errors: FieldErrors<CreateFormData>;
  register: UseFormRegister<CreateFormData>;
  setValue: UseFormSetValue<CreateFormData>;
  formValues: CreateFormData;
}

const PersonalInfo = ({ errors, register, setValue, formValues }: IPersonalInfoProps) => {
  return (
    <section className={styles.section}>
      <h2>Личная информация</h2>
      <div className={styles.row}>
        <CustomInput label={'Отчество'} error={errors.patronymic?.message} {...register('patronymic')} />
        <div className={styles.inputWrapper}>
          <label className={styles.label}>
            Дата рождения<span>*</span>
          </label>
          <DatePicker
            className={styles.fullWidth}
            status={errors.birthday ? 'error' : ''}
            onChange={date => setValue('birthday', date?.toDate())}
            value={formValues.birthday ? dayjs(formValues.birthday) : null}
          />
          {errors.birthday && <span className={styles.error}>{errors.birthday.message}</span>}
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.radioGroup}>
          <label className={styles.label}>
            Пол<span>*</span>
          </label>
          <Radio.Group value={formValues.gender} onChange={e => setValue('gender', e.target.value)}>
            <Radio value={'male'}>Мужской</Radio>
            <Radio value={'female'}>Женский</Radio>
          </Radio.Group>
        </div>
        <CustomInput
          label={'Номер телефона'}
          icon={<PhoneOutlined />}
          placeholder=''
          error={errors.phoneNumber?.message}
          {...register('phoneNumber')}
        />
      </div>

      <CustomInput
        label={'Адрес'}
        placeholder={'Введите ваш адрес'}
        error={errors.address?.message}
        {...register('address')}
      />
    </section>
  );
};

export default PersonalInfo;
