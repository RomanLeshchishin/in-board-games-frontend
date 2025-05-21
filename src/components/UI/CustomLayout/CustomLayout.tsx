import styles from './CustomLayout.module.scss';
import { Sidebar } from '@/components/Sidebar/Sidebar';
import { UserProfileCard } from '@/components/UserProfileCard/UserProfileCard';
import { getUser } from '@/localStorage/user';
import { useProfile } from '@/hooks/profile/useProfile';

export const CustomLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const user = getUser();
  const { data: profile } = useProfile(user?.id || '');
  return (
    <div className={styles.mainBlock}>
      <Sidebar selectedKey={''} onSelect={() => {}} />
      <div className={styles.mainContent}>{children}</div>
      {user &&
        (!profile?.user ? (
          <div className={styles.profileLoading}>Загрузка профиля...</div>
        ) : (
          <UserProfileCard profile={profile} />
        ))}
    </div>
  );
};
