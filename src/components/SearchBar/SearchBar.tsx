import React, { useState } from 'react';
import { Input, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import styles from './SearchBar.module.scss';
import { IProfile } from '@/models/IProfile';
import { useQueryClient } from '@tanstack/react-query';

interface ISearchBarProps {
  profiles: IProfile[];
}

const SearchBar = ({ profiles }: ISearchBarProps) => {
  const queryClient = useQueryClient();
  const [inputSearch, setInputSearch] = useState<string>('');
  const onChange = (e: any) => {
    setInputSearch(e.target.value);
  };

  const onSearch = () => {
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
    queryClient.setQueryData(['profileCards'], searchProfiles());
  };

  return (
    <div className={styles.searchBar}>
      <Input placeholder={'Поиск людей'} onChange={onChange} className={styles.searchInput} />
      <Button type={'primary'} icon={<SearchOutlined />} onClick={onSearch} className={styles.searchButton}>
        Поиск
      </Button>
    </div>
  );
};

export default SearchBar;
