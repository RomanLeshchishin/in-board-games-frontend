import { RootState } from '../store';

export const selectInterests = (state: RootState) => state.form.interestIds;

export const selectTopics = (state: RootState) => state.form.topicIds;

export const selectGames = (state: RootState) => state.form.gameIds;
