import styles from './UserForm.module.scss';
import { Select } from 'antd';
import { addGame, addInterest, addTopic } from '@/redux/formSlice/slice';
import React from 'react';
import { useAppDispatch } from '@/redux/store';
import { useInterests } from '@/hooks/interests/useInterests';
import { useTopics } from '@/hooks/topics/useTopics';
import { useGames } from '@/hooks/games/useGames';

const InterestsInfo = () => {
  const dispatch = useAppDispatch();
  const { data: interests } = useInterests();
  const { data: topics } = useTopics();
  const { data: games } = useGames();
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
