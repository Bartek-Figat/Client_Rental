import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../config/index';

export const userAuthentication = createAsyncThunk('logout/fetch', async () => {
  let history = useHistory();
  function redirectAfterConfirmation() {
    history.push('/login');
  }
  const str = history.location.pathname;
  const path = str.split('/');
  useEffect(() => {
    async function fetchData() {
      try {
        await axios.get(`${baseUrl}activate/${path[2]}`);
        redirectAfterConfirmation();
      } catch (err) {
        if (err.response.data.error === 'Account Activated') {
          localStorage.removeItem('token');
          window.location.href = '/';
        }
      }
    }
    return fetchData();
  }, []);
});
