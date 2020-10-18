import React from 'react';
import { useHistory } from 'react-router-dom';

function Logout() {
  let history = useHistory();
  history.push('/login');
  localStorage.removeItem('token');
}

function AuthButton() {
  return <button onClick={Logout()}> Sign out </button>;
}

export { AuthButton };
