import React, { useState } from 'react';
import { Input, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import styles from './SearchBar.module.scss';
import { IProfile } from '@/models/IProfile';
import { useQueryClient } from '@tanstack/react-query';
import { IEvent } from '@/models/IEvent';
import { ICommunity } from '@/models/ICommunity';

interface ISearchBarProps {
  data: IProfile[] | IEvent[] | ICommunity[];
  onSearch: (inputSearch: string) => void;
}

const SearchBar = ({ data, onSearch }: ISearchBarProps) => {
  const [inputSearch, setInputSearch] = useState<string>('');
  const onChange = (e: any) => {
    setInputSearch(e.target.value);
  };

  return (
    <div className={styles.searchBar}>
      <Input placeholder={'Поиск людей'} onChange={onChange} className={styles.searchInput} />
      <Button
        type={'primary'}
        icon={<SearchOutlined />}
        onClick={() => onSearch(inputSearch)}
        className={styles.searchButton}
      >
        Поиск
      </Button>
    </div>
  );
};

export default SearchBar;
