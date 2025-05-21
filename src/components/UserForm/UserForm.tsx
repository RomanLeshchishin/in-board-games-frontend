import React from 'react';
import { DatePicker, Select, Radio, Button, TimePicker, Checkbox } from 'antd';
import { PhoneOutlined } from '@ant-design/icons';
import { CustomInput } from '../UI/CustomInput/CustomInput';
import styles from './UserProfileForm.module.scss';

const { Option } = Select;

export const UserForm = () => {
  return (
    <form className={styles.formWrapper}>
      <section className={styles.section}>
        <h2>Личная информация</h2>
        <div className={styles.row}>
          <CustomInput label='Отчество' required />
          <div className={styles.inputWrapper}>
            <label className={styles.label}>
              Дата рождения<span>*</span>
            </label>
            <DatePicker className={styles.fullWidth} />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.radioGroup}>
            <label className={styles.label}>
              Пол<span>*</span>
            </label>
            <Radio.Group defaultValue='male'>
              <Radio value='male'>Мужской</Radio>
              <Radio value='female'>Женский</Radio>
            </Radio.Group>
          </div>
          <CustomInput label='Номер телефона' icon={<PhoneOutlined />} placeholder='+7 (___) ___-__-__' required />
        </div>

        <CustomInput label='Адрес' placeholder='Введите ваш адрес' required />
      </section>

      <section className={styles.section}>
        <h2>Интересы и увлечения</h2>
        <Select className={styles.fullWidth} placeholder='Выберите интересы' mode='multiple' />
        <div className={styles.row}>
          <Select className={styles.fullWidth} placeholder='Выберите жанры' />
          <Select className={styles.fullWidth} placeholder='Выберите игры' />
        </div>
      </section>

      <section className={styles.section}>
        <h2>Участие в мероприятиях</h2>
        <div className={styles.row}>
          <TimePicker className={styles.fullWidth} placeholder='Выберите время' />
          <Select className={styles.fullWidth} defaultValue='weekly'>
            <Option value='weekly'>Раз в неделю</Option>
            <Option value='monthly'>Раз в месяц</Option>
            <Option value='never'>Не планирую</Option>
          </Select>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Профессиональная информация</h2>
        <CustomInput label='Профессия' required placeholder='Введите вашу профессию' />
        <Checkbox className={styles.checkbox}>Я студент</Checkbox>
      </section>

      <div className={styles.footer}>
        <Button>Отмена</Button>
        <Button type='primary'>Сохранить</Button>
      </div>
    </form>
  );
};
