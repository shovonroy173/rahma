import pageReducer from './PageSlice';
import formReducer from './slices/formSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  combineReducers,
  configureStore,
  isRejectedWithValue,
} from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';

import {setupListeners} from '@reduxjs/toolkit/query';

// import {apiSlice} from './apiSlice';
import {Alert} from 'react-native';
import { userSlice } from './slices/userSlice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
  whitelist: ['form'], //for persist
};
export const rtkQueryErrorLogger = api => next => action => {
  if (isRejectedWithValue(action)) {
    console.log('rtkQuery error:', action.error, action.payload);
    Alert(JSON.stringify(action));
  }

  return next(action);
};

const reducer = combineReducers({
  page: pageReducer,
  form: formReducer,
  // [apiSlice.reducerPath]: apiSlice.reducer,
  [userSlice.reducerPath]: userSlice.reducer,

});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(userSlice.middleware),
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);
