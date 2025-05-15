import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterSliceState } from '@/redux/filterSlice/types';
import { IFilterFormServer } from '@/models/IFilter';

const initialState: FilterSliceState = {
  filters: [],
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    addFilter: (state, action: PayloadAction<IFilterFormServer>) => {
      const index = state.filters.findIndex(filter => filter.modelType === action.payload.modelType);

      if (index !== -1) {
        state.filters = [...state.filters.slice(0, index), action.payload, ...state.filters.slice(index + 1)];
      } else {
        state.filters = [...state.filters, action.payload];
      }
      console.log(state.filters);
    },
  },
});

export const { addFilter } = filterSlice.actions;

export default filterSlice.reducer;
