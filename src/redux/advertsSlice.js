import { createSlice } from '@reduxjs/toolkit';
import { fetchAdverts } from './operations';
import toast from 'react-hot-toast';

const advertsSlice = createSlice({
  name: 'adverts',
  initialState: {
    items: [],
    loading: false,
    error: null,
    visibleCount: 4,
  },
  reducers: {
    loadMoreAdverts(state) {
      state.visibleCount += 4;
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
        state.items = action.payload;
      })
      .addCase(fetchAdverts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        toast.error(`Error fetching adverts`);
      });
  },
});

export const { loadMoreAdverts } = advertsSlice.actions;
export default advertsSlice.reducer;
