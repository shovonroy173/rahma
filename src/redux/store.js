import { configureStore } from '@reduxjs/toolkit';
import pageReducer from './PageSlice';
const store = configureStore({
  reducer: {
    page: pageReducer,
  },
});

export default store;
