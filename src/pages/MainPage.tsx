import styles from './MainPage.module.scss';
import { Sidebar } from '@/components/Sidebar/Sidebar';
import SearchBar from '@/components/SearchBar/SearchBar';
import FilterPanel from '@/components/FilterPanel/FilterPanel';
import ProfileCard from '@/components/ProfileCard/ProfileCard';
import { UserProfileCard } from '@/components/UserProfileCard/UserProfileCard';
import { useAllProfiles } from '@/hooks/profile/useAllProfiles';

export const MainPage = () => {
  const { data: profiles = [], isLoading, error } = useAllProfiles();
  return (
    <div className={styles.mainBlock}>
      <Sidebar selectedKey={''} onSelect={() => {}} />
      <div className={styles.mainContent}>
        <SearchBar profiles={profiles} />
        <FilterPanel />
        <div className={styles.profileCards}>
          {isLoading ? (
            <div>Загрузка...</div>
          ) : error ? (
            <div>Ошибка загрузки</div>
          ) : (
            <div className={styles.profileCards}>
              {profiles.map(profile => (
                <ProfileCard key={profile.id} profileCard={profile} />
              ))}
            </div>
          )}
        </div>
      </div>
      <UserProfileCard profile={{}} />
    </div>
  );
};
