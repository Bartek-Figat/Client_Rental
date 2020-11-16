import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseUrl } from '../config/index';

export const logoutUser = createAsyncThunk('logout/fetch', async () => {
  const jwt = localStorage.getItem('token');
  await axios.delete(`${baseUrl}logout`, {
    credentials: 'include',
    headers: {
      'x-access-token': jwt,
    },
  });
  localStorage.removeItem('token');
  window.location.href = '/';
});
