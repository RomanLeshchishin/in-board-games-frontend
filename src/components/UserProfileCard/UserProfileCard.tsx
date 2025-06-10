import React from 'react';
import { Avatar, Tag, Divider, Card, Button } from 'antd';
import styles from './UserProfileCard.module.scss';
import { IProfile } from '@/models/IProfile';
import { useFormInterests } from '@/hooks/form/useFormInterests';
import { useAvatarByFileId } from '@/hooks/files/useAvatarByFileId';
import { UserOutlined } from '@ant-design/icons';
import Link from 'next/link';

interface IUserProfileCardProps {
  profile: IProfile;
}

export const UserProfileCard = ({ profile }: IUserProfileCardProps) => {
  const { userId, user, avatar, age, about } = profile;
  const { data: avatarFromServer } = avatar ? useAvatarByFileId(avatar) : {};
  const link = avatarFromServer && !Array.isArray(avatarFromServer) ? avatarFromServer.fileLink : '';
  const { data, isLoading, isError } = useFormInterests(userId);

  return (
    <Card className={styles.profileInfoCard}>
      <div className={styles.profileHeader}>
        <Avatar size={96} src={link} />
        <div className={styles.profileName}>{`${user.firstName} ${user.lastName}`}</div>
        <div className={styles.profileMeta}>{age} лет</div>
      </div>

      <Divider />

      <div className={styles.section}>
        <div className={styles.sectionTitle}>О себе</div>
        <div className={styles.aboutText}>{about}</div>
      </div>

      <div className={styles.section}>
        <div className={styles.sectionTitle}>Интересы</div>
        <div className={styles.tags}>
          {data?.interests.map(tag => (
            <Tag key={tag} color='blue'>
              {tag}
            </Tag>
          ))}
        </div>
      </div>

      <Divider />

      <div className={styles.section}>
        <div className={styles.sectionTitle}>Статистика</div>
        <div className={styles.statsRow}>
          <div className={styles.statBox}>
            <div className={styles.statLabel}>Просмотров</div>
          </div>
          <div className={styles.statBox}>
            <div className={styles.statLabel}>Лайков</div>
          </div>
          <div className={styles.statBox}>
            <div className={styles.statLabel}>Совпадений</div>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.sectionTitle}>Активность</div>
        {/* Можно добавить активность позже */}
        <Link href={'/edit-profile'}>
          <Button type={'primary'} icon={<UserOutlined />} className={styles.btn}>
            Изменить профиль
          </Button>
        </Link>
      </div>
    </Card>
  );
};
