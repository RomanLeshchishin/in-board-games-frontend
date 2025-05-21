import styles from './SidebarPages.module.scss';
import SearchBar from '@/components/SearchBar/SearchBar';
import FilterPanel from '@/components/FilterPanel/FilterPanel';
import { CustomLayout } from '@/components/UI/CustomLayout/CustomLayout';
import { useAllCommunities } from '@/hooks/communities/useAllCommunities';
import CommunityCard from '@/components/Cards/CommunityCard';
import { QueryKey } from '@/const/queryKey';
import { useQueryClient } from '@tanstack/react-query';

export const CommunitiesPage = () => {
  const { data: communities = [], isLoading, error } = useAllCommunities();
  const queryClient = useQueryClient();

  const onSearch = (inputSearch: string) => {
    const searchCommunities = () => {
      const inpSearch = inputSearch.trim().toLowerCase();
      if (inpSearch !== '') {
        const filterCommunities = communities.filter(community => community.title.includes(inpSearch));
        if (filterCommunities.length === 0) {
          return communities.filter(community => community.description?.toLowerCase().includes(inpSearch));
        } else {
          return filterCommunities;
        }
      } else {
        return communities;
      }
    };
    queryClient.setQueryData([QueryKey.COMMUNITIES], searchCommunities());
  };

  return (
    <CustomLayout>
      <div className={styles.mainContent}>
        <SearchBar data={communities} onSearch={onSearch} />
        <FilterPanel />
        <div className={styles.cardWrapper}>
          {isLoading ? (
            <div>Загрузка...</div>
          ) : error ? (
            <div>Ошибка загрузки</div>
          ) : (
            <div className={styles.cardWrapper}>
              {communities.map(community => (
                <CommunityCard key={community.id} cardData={community} />
              ))}
            </div>
          )}
        </div>
      </div>
    </CustomLayout>
  );
};
