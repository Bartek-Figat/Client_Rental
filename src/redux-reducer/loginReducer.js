import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseUrl } from '../config/index';

export const fetchUserAfterLogin = createAsyncThunk(
  'login/fetch',
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${baseUrl}login`, userData);
      const { accessToken } = data.user;
      localStorage.setItem('token', accessToken);
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    error: null,
    errors: null,
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [fetchUserAfterLogin.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchUserAfterLogin.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [fetchUserAfterLogin.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.loading = false;
    },
  },
});

export const { restLogin } = loginSlice.actions;
export default loginSlice.reducer;
