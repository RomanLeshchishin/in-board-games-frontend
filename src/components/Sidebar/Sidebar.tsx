import React from 'react';
import { Menu, Button, MenuProps } from 'antd';
import { SettingOutlined, AppstoreOutlined, MailOutlined, UserOutlined, MessageOutlined } from '@ant-design/icons';
import styles from './Sidebar.module.scss';
import Link from 'next/link';
import { getUser } from '@/localStorage/user';

type MenuItem = Required<MenuProps>['items'][number];

export const Sidebar = ({ selectedKey, onSelect }) => {
  const user = getUser();
  const items: MenuItem[] = [
    {
      key: 'sub1',
      label: 'Navigation One',
      icon: <MailOutlined />,
    },
    {
      key: 'sub2',
      label: 'Navigation Two',
      icon: <AppstoreOutlined />,
    },
    {
      key: 'sub4',
      label: 'Navigation Three',
      icon: <SettingOutlined />,
    },
  ];
  return (
    <div className={styles.sidebarMenu}>
      <div className={styles.logoPlaceholder}>Логотип</div>
      <Menu defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode='inline' items={items} />
      {!user && (
        <div className={styles.buttonsBlock}>
          <Link href={'/login'}>
            <Button icon={<UserOutlined />}>Войти</Button>
          </Link>
          <Link href={'/register'}>
            <Button type={'primary'} icon={<UserOutlined />}>
              Зарегистрироваться
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};
