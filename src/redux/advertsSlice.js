import { createSlice } from '@reduxjs/toolkit';
import { fetchAdverts } from './operations';
import toast from 'react-hot-toast';

const initialState = JSON.parse(localStorage.getItem('adverts')) || [];

const advertsSlice = createSlice({
  name: 'adverts',
  initialState: {
    items: [],
    favorites: [],
    loading: false,
    error: null,
  },
  reducers: {
    addFavorite: (state, action) => {
      state.favorites.push(action.payload);
      const updatedFavorites = state.favorites.map((item) => item._id);
      localStorage.setItem('adverts', JSON.stringify(updatedFavorites));
    },
    deleteFavorite: (state, action) => {
      state.favorites = state.favorites.filter(
        (advert) => advert._id !== action.payload
      );
      const updatedFavorites = state.favorites.map((item) => item._id);
      localStorage.setItem('adverts', JSON.stringify(updatedFavorites));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdverts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAdverts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
        state.favorites = state.items.filter((item) =>
          initialState.includes(item._id)
        );
      })
      .addCase(fetchAdverts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        toast.error(`Error fetching adverts`);
      });
  },
});

export const { addFavorite, deleteFavorite } = advertsSlice.actions;
export default advertsSlice.reducer;
