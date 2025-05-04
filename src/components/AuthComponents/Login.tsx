import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Typography } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import { CustomInput } from '../UI/CustomInput/CustomInput';
import styles from './AuthComponents.module.scss';
import { LoginFormData, LoginSchema } from '@/models/AuthTypes';
import Link from 'next/link';

const { Title } = Typography;

export const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit = (data: LoginFormData) => {
    console.log('Submitted:', data);
  };

  return (
    <div className={styles.container}>
      <div className={styles.formBox}>
        <Title level={3} style={{ textAlign: 'center' }}>
          Вход
        </Title>
        <CustomInput
          label={'Почта'}
          placeholder={'email@example.com'}
          icon={<MailOutlined />}
          error={errors.email?.message}
          {...register('email')}
        />

        <CustomInput
          label={'Пароль'}
          placeholder={'Введите пароль'}
          type={'password'}
          icon={<LockOutlined />}
          error={errors.password?.message}
          {...register('password')}
        />

        <button className={styles.customButtonRegistration} onClick={handleSubmit(onSubmit)}>
          Войти
        </button>
        <p style={{ textAlign: 'center', marginTop: 16 }}>
          Ещё нет аккаунта?{' '}
          <Link href={'/register'} style={{ color: '#1890ff' }}>
            Зарегистрироваться
          </Link>
        </p>
      </div>
    </div>
  );
};
