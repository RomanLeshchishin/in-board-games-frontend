'use client';
import React from 'react';
import { CustomLayout } from '@/components/UI/CustomLayout/CustomLayout';
import styles from '@/pages/SidebarPages.module.scss';
import ProfileCard from '@/components/Cards/ProfileCard';
import { useAllRecommendProfiles } from '@/hooks/recommendations/useAllRecommendProfiles';

const RecommendationsPage = () => {
  const { data: profiles = [], isLoading, error } = useAllRecommendProfiles();

  return (
    <CustomLayout>
      <div className={styles.cardWrapper}>
        {isLoading ? (
          <div>Загрузка...</div>
        ) : error ? (
          <div>Ошибка загрузки</div>
        ) : (
          <div className={styles.cardWrapper}>
            {profiles.map(profile => (
              <ProfileCard
                key={profile.profile.id}
                cardData={{
                  user: profile.user,
                  id: profile.profile.id,
                  userId: profile.profile.userId,
                  avatar: profile.profile.avatar,
                  about: profile.profile.about,
                  age: profile.profile.age,
                }}
              />
            ))}
          </div>
        )}
      </div>
    </CustomLayout>
  );
};

export default RecommendationsPage;
