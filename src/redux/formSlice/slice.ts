import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FormSliceState } from '@/redux/formSlice/types';

const initialState: FormSliceState = {
  interestIds: [],
  topicIds: [],
  gameIds: [],
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addInterest: (state, action: PayloadAction<string>) => {
      const index = state.interestIds.findIndex(interest => interest === action.payload);

      if (index === -1) {
        state.interestIds = [...state.interestIds, action.payload];
      }
      console.log(state.interestIds);
    },

    addTopic: (state, action: PayloadAction<string>) => {
      const index = state.topicIds.findIndex(topic => topic === action.payload);

      if (index === -1) {
        state.topicIds = [...state.topicIds, action.payload];
      }
      console.log(state.topicIds);
    },

    addGame: (state, action: PayloadAction<string>) => {
      const index = state.gameIds.findIndex(game => game === action.payload);

      if (index === -1) {
        state.gameIds = [...state.gameIds, action.payload];
      }
      console.log(state.gameIds);
    },
  },
});

export const { addInterest, addTopic, addGame } = formSlice.actions;

export default formSlice.reducer;
