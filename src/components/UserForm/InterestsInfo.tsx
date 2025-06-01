import styles from './UserForm.module.scss';
import { Select } from 'antd';
import { addGame, addInterest, addTopic } from '@/redux/formSlice/slice';
import React from 'react';
import { useAppDispatch } from '@/redux/store';
import { useAllInterests } from '@/hooks/interests/useAllInterests';
import { useAllTopics } from '@/hooks/topics/useAllTopics';
import { useAllGames } from '@/hooks/games/useAllGames';

const InterestsInfo = () => {
  const dispatch = useAppDispatch();
  const { data: interests } = useAllInterests();
  const { data: topics } = useAllTopics();
  const { data: games } = useAllGames();
  return (
    <section className={styles.section}>
      <h2>Интересы и увлечения</h2>
      <Select
        className={styles.fullWidth}
        placeholder={'Выберите интересы'}
        mode={'multiple'}
        options={
          interests
            ? interests.map(interest => {
                return { value: interest.id, label: interest.title };
              })
            : []
        }
        onChange={value => dispatch(addInterest(value))}
      />
      <div className={styles.row}>
        <Select
          className={styles.fullWidth}
          placeholder={'Выберите жанры'}
          options={
            topics
              ? topics.map(topic => {
                  return { value: topic.id, label: topic.title };
                })
              : []
          }
          onChange={value => dispatch(addTopic(value))}
        />
        <Select
          className={styles.fullWidth}
          placeholder={'Выберите игры'}
          options={
            games
              ? games.map(game => {
                  return { value: game.id, label: game.title };
                })
              : []
          }
          onChange={value => dispatch(addGame(value))}
        />
      </div>
    </section>
  );
};

export default InterestsInfo;
