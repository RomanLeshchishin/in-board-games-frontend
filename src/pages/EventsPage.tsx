import styles from './SidebarPages.module.scss';
import { Sidebar } from '@/components/Sidebar/Sidebar';
import SearchBar from '@/components/SearchBar/SearchBar';
import FilterPanel from '@/components/FilterPanel/FilterPanel';
import EventCard from '@/components/Cards/EventCard';
import { useAllEvents } from '@/hooks/events/useAllEvents';
import { QueryKey } from '@/const/queryKey';
import { useQueryClient } from '@tanstack/react-query';

export const EventsPage = () => {
  const { data: events = [], isLoading, error } = useAllEvents();
  const queryClient = useQueryClient();

  const onSearch = (inputSearch: string) => {
    const searchEvents = () => {
      const inpSearch = inputSearch.trim().toLowerCase();
      if (inpSearch !== '') {
        const filterEvents = events.filter(event => event.title.includes(inpSearch));
        if (filterEvents.length === 0) {
          return events.filter(event => event.place?.toLowerCase().includes(inpSearch));
        } else {
          return filterEvents;
        }
      } else {
        return events;
      }
    };
    queryClient.setQueryData([QueryKey.EVENTS], searchEvents());
  };

  return (
    <div className={styles.mainBlock}>
      <Sidebar selectedKey={''} onSelect={() => {}} />
      <div className={styles.mainContent}>
        <SearchBar data={events} onSearch={onSearch} />
        <FilterPanel />
        <div className={styles.cardWrapper}>
          {isLoading ? (
            <div>Загрузка...</div>
          ) : error ? (
            <div>Ошибка загрузки</div>
          ) : (
            <div className={styles.cardWrapper}>
              {events.map(event => (
                <EventCard key={event.id} cardData={event} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
