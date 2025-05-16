import React from 'react';
import { Card, Tag, Button, Spin } from 'antd';
import { HeartOutlined, MessageOutlined, UserOutlined } from '@ant-design/icons';
import styles from './ProfileCard.module.scss';
import { IProfile } from '@/models/IProfile';
import { useFormInterests } from '@/hooks/form/useFormInterests';

interface IProfileCardProps {
  profileCard: IProfile;
}

export const ProfileCard = ({ profileCard }: IProfileCardProps) => {
  const { userId, user, avatar, age, about } = profileCard;
  const { data, isLoading, isError } = useFormInterests(userId);

  if (!profileCard) {
    return <div>No profile data available.</div>;
  }

  return (
    <Card
      className={styles.profileCard}
      cover={<img alt={'Роман'} src={''} className={styles.profileAvatar} />}
      hoverable
    >
      <div className={styles.profileHeader}>
        <Card.Meta title={`${user.firstName}`} />
        <HeartOutlined className={styles.heartIcon} />
      </div>

      <div className={styles.profileDescription}>{'текст текст текст'}</div>

      <div className={styles.profileTags}>
        {isLoading && <Spin size={'small'} />}
        {isError && <div>Ошибка загрузки интересов</div>}
        {data?.interests.map(interest => (
          <Tag color={'blue'} key={interest}>
            {interest}
          </Tag>
        ))}
      </div>
      <div className={styles.buttonsBlock}>
        <Button icon={<UserOutlined />} block>
          Профиль
        </Button>
        <Button type={'primary'} icon={<MessageOutlined />} block>
          Написать
        </Button>
      </div>
    </Card>
  );
};

export default ProfileCard;
