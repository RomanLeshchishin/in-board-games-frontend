import styles from './SidebarPages.module.scss';
import SearchBar from '@/components/SearchBar/SearchBar';
import FilterPanel from '@/components/FilterPanel/FilterPanel';
import ProfileCard from '@/components/Cards/ProfileCard';
import { useAllProfiles } from '@/hooks/profile/useAllProfiles';
import { CustomLayout } from '@/components/UI/CustomLayout/CustomLayout';
import { QueryKey } from '@/const/queryKey';
import { useQueryClient } from '@tanstack/react-query';

export const MainPage = () => {
  const { data: profiles = [], isLoading, error } = useAllProfiles();
  const queryClient = useQueryClient();

  const onSearch = (inputSearch: string) => {
    const searchProfiles = () => {
      const inpSearch = inputSearch.trim().toLowerCase();
      if (inpSearch !== '') {
        const filterProfiles = profiles.filter(profile =>
          `${profile.user.firstName.toLowerCase()} ${profile.user.lastName.toLowerCase()}`.includes(inpSearch),
        );
        if (filterProfiles.length === 0) {
          return profiles.filter(profile => profile.about?.toLowerCase().includes(inpSearch));
        } else {
          return filterProfiles;
        }
      } else {
        return profiles;
      }
    };
    queryClient.setQueryData([QueryKey.PROFILE_CARDS], searchProfiles());
  };

  return (
    <CustomLayout>
      <SearchBar data={profiles} onSearch={onSearch} />
      <FilterPanel />
      <div className={styles.cardWrapper}>
        {isLoading ? (
          <div>Загрузка...</div>
        ) : error ? (
          <div>Ошибка загрузки</div>
        ) : (
          <div className={styles.cardWrapper}>
            {profiles.map(profile => (
              <ProfileCard key={profile.id} cardData={profile} />
            ))}
          </div>
        )}
      </div>
    </CustomLayout>
  );
};
