import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { filterSlice } from '@/redux/filterSlice/slice';
import { formSlice } from '@/redux/formSlice/slice';

export const store = configureStore({
  reducer: {
    filter: filterSlice.reducer,
    form: formSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
