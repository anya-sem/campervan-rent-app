import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://666195c563e6a0189fea9911.mockapi.io';

export const fetchAdverts = createAsyncThunk(
  'adverts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/adverts');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// export const addFavorite = createAsyncThunk(
//   'adverts/addFavorite',
//   async (advert, thunkAPI) => {
//     try {
//       const response = await axios.post('/adverts', advert);
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

export const fetchAdvertsById = createAsyncThunk(
  'adverts/fetchById',
  async (advertId, thunkAPI) => {
    try {
      await axios.delete(`/adverts/${advertId}`);
      return advertId;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
