'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Typography } from 'antd';
import { MailOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';
import { CustomInput } from '../UI/CustomInput/CustomInput';
import styles from './AuthComponents.module.scss';
import { RegisterFormData, RegisterSchema } from '@/models/AuthTypes';
import Link from 'next/link';

const { Title } = Typography;

export const RegistrationForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(RegisterSchema),
    mode: 'onChange',
  });

  const onSubmit = (data: RegisterFormData) => {
    console.log('Submitted:', data);
  };

  return (
    <div className={styles.container}>
      <div className={styles.formBox}>
        <Title level={3} style={{ textAlign: 'center' }}>
          Регистрация
        </Title>
        <CustomInput
          label='Имя'
          placeholder='Введите имя'
          icon={<UserOutlined />}
          {...register('firstName')}
          error={errors.firstName?.message}
        />

        <CustomInput
          label='Фамилия'
          placeholder='Введите фамилию'
          icon={<UserOutlined />}
          {...register('lastName')}
          error={errors.lastName?.message}
        />

        <CustomInput
          required={undefined}
          label={'Почта'}
          placeholder={'email@example.com'}
          icon={<MailOutlined />}
          error={errors.email?.message}
          {...register('email')}
        />

        <CustomInput
          required={undefined}
          label={'Пароль'}
          placeholder={'Введите пароль'}
          type={'password'}
          icon={<LockOutlined />}
          error={errors.password?.message}
          {...register('password')}
        />

        <button className={styles.customButtonRegistration} onClick={handleSubmit(onSubmit)}>
          Зарегистрироваться
        </button>

        <p style={{ textAlign: 'center', marginTop: 16 }}>
          Уже есть аккаунт?{' '}
          <Link href={'/login'} style={{ color: '#1890ff' }}>
            Войти
          </Link>
        </p>
      </div>
    </div>
  );
};
