import React from 'react';
import { Button, Collapse, Radio, Select, Space } from 'antd';
import { FilterOutlined, SearchOutlined } from '@ant-design/icons';
import styles from './FilterPanel.module.scss';
import { useAllInterests } from '@/hooks/interests/useAllInterests';
import { useAllTopics } from '@/hooks/topics/useAllTopics';
import { useAllGames } from '@/hooks/games/useAllGames';
import { FormModelType } from '@/models/IFilter';
import { filterAge, filterGender } from '@/const/filters';
import { addFilter } from '@/redux/filterSlice/slice';
import { useAppDispatch } from '@/redux/store';
import { getUser } from '@/localStorage/user';
import { useSelector } from 'react-redux';
import { selectFilters } from '@/redux/filterSlice/selectors';
import { useFilter } from '@/hooks/filter/useFilter';
import { useFilterAuth } from '@/hooks/filter/useFilterAuth';

const { Panel } = Collapse;

const FilterPanel = () => {
  const user = getUser();
  const dispatch = useAppDispatch();
  const filters = useSelector(selectFilters);
  const { data: interests } = useAllInterests();
  const { data: topics } = useAllTopics();
  const { data: games } = useAllGames();
  const filterForms = useFilter();
  const filterFormsAuth = useFilterAuth();

  const onApplyFilters = () => {
    if (user) {
      filterFormsAuth.mutate(filters);
    } else {
      filterForms.mutate(filters);
    }
  };

  return (
    <div className={styles.filtersPanel}>
      <div className={styles.filtersRow}>
        <div className={styles.filterBlock}>
          <label>Возраст</label>
          <Select
            placeholder={'Выберите возраст'}
            onChange={value => dispatch(addFilter({ modelId: value, modelType: FormModelType.AGE }))}
            className={styles.select}
            options={filterAge}
          />
        </div>

        <div className={styles.filterBlock}>
          <label>Пол</label>
          <Radio.Group
            onChange={e => dispatch(addFilter({ modelId: e.target.value, modelType: FormModelType.GENDER }))}
          >
            <Space direction={'vertical'}>
              {filterGender.map(option => (
                <Radio value={option.value}>{option.label}</Radio>
              ))}
            </Space>
          </Radio.Group>
        </div>

        {/*<div className={styles.filterBlock}>*/}
        {/*  <label>Местоположение</label>*/}
        {/*  <Select*/}
        {/*    placeholder='Выберите город'*/}
        {/*    onChange={value => handleChange('location', value)}*/}
        {/*    className={styles.select}*/}
        {/*    options={}*/}
        {/*  >*/}
        {/*    <Option value='Санкт-Петербург'>Санкт-Петербург</Option>*/}
        {/*    <Option value='Москва'>Москва</Option>*/}
        {/*    <Option value='Новосибирск'>Новосибирск</Option>*/}
        {/*  </Select>*/}
        {/*</div>*/}

        <div className={styles.filterBlock}>
          <label>Интересы</label>
          <Select
            placeholder={'Выберите интерес'}
            onChange={value => dispatch(addFilter({ modelId: value, modelType: FormModelType.INTEREST }))}
            className={styles.select}
            options={
              interests
                ? interests.map(interest => {
                    return { value: interest.id, label: interest.title };
                  })
                : []
            }
          />
        </div>
      </div>

      {user && (
        <Collapse className={styles.collapse}>
          <Panel header='Дополнительные фильтры' key='1'>
            <div className={styles.filterBlock}>
              <label>Жанры</label>
              <Select
                placeholder={'Выберите жанр'}
                onChange={() => {}}
                className={styles.select}
                options={
                  topics
                    ? topics.map(topic => {
                        return { value: topic.id, label: topic.title };
                      })
                    : []
                }
              />
            </div>
            <div className={styles.filterBlock}>
              <label>Игры</label>
              <Select
                placeholder={'Выберите игру'}
                onChange={() => {}}
                className={styles.select}
                options={
                  games
                    ? games.map(games => {
                        return { value: games.id, label: games.title };
                      })
                    : []
                }
              />
            </div>
            <div className={styles.filterBlock}>
              <label>Удобное время</label>
              <Select
                placeholder={'Выберите время'}
                onChange={() => {}}
                className={styles.select}
                options={
                  games
                    ? games.map(games => {
                        return { value: games.id, label: games.title };
                      })
                    : []
                }
              />
            </div>
            <div className={styles.filterBlock}>
              <label>Как часто</label>
              <Select
                placeholder={''}
                onChange={() => {}}
                className={styles.select}
                options={
                  games
                    ? games.map(games => {
                        return { value: games.id, label: games.title };
                      })
                    : []
                }
              />
            </div>
          </Panel>
        </Collapse>
      )}
      <div className={styles.buttonsRow}>
        {/*<Button icon={<FilterOutlined />} onClick={onReset}>*/}
        {/*  Сбросить*/}
        {/*</Button>*/}
        <Button type={'primary'} icon={<SearchOutlined />} onClick={onApplyFilters}>
          Применить фильтры
        </Button>
      </div>
    </div>
  );
};

export default FilterPanel;
