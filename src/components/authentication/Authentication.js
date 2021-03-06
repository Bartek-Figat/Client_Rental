import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { baseUrl } from '../../config/index';

const Authentication = () => {
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
    fetchData();
  }, []);

  return <div>...</div>;
};
export default Authentication;
