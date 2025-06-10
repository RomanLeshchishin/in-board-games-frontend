'use client';
import React from 'react';
import { Menu, Button, MenuProps } from 'antd';
import { SettingOutlined, AppstoreOutlined, MailOutlined, UserOutlined, MessageOutlined } from '@ant-design/icons';
import styles from './Sidebar.module.scss';
import Link from 'next/link';
import { getUser } from '@/localStorage/user';
import { useNavigate } from 'react-router-dom';
import { useRouter } from 'next/navigation';

type MenuItem = Required<MenuProps>['items'][number];

export const Sidebar = ({ selectedKey, onSelect }) => {
  const router = useRouter();
  const user = getUser();
  const items: MenuItem[] = [
    {
      key: 'sub1',
      label: 'Главная',
      onClick: () => router.push('/'),
    },
    {
      key: 'sub2',
      label: 'Рекомендации',
      onClick: () => router.push('/recommendations'),
    },
  ];
  return (
    <div className={styles.sidebarMenu}>
      <Menu defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode='inline' items={items} />
      {!user && (
        <div className={styles.buttonsBlock}>
          <Link href={'/login'}>
            <Button icon={<UserOutlined />} className={styles.btn}>
              Войти
            </Button>
          </Link>
          <Link href={'/register'}>
            <Button type={'primary'} icon={<UserOutlined />} className={styles.btn}>
              Зарегистрироваться
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};
