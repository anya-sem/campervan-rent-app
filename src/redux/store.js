import { configureStore } from '@reduxjs/toolkit';
import advertsReducer from './advertsSlice';
import favoritesReducer from './favoritesSlice';

export const store = configureStore({
  reducer: {
    adverts: advertsReducer,
    favorites: favoritesReducer,
  },
});
