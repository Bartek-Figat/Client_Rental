import React, { useState, useEffect } from 'react';
import { Link, useHistory, Redirect } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../../containers/navBar';

const Admin = () => {
  const [userCredentials, setUserCredentials] = useState([]);
  let history = useHistory();
  function redirectAfterErrorToken() {
    history.push('/login');
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const jwt = localStorage.getItem('token');
        const { data } = await axios.get('http://localhost:8080/admin', {
          credentials: 'include',
          headers: {
            'x-access-token': jwt,
          },
        });
        console.log(data);
        setUserCredentials(data);

        return data;
      } catch (err) {
        if (err.response.data.error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <h2 className="user_credentials">
        {' '}
        {userCredentials ? userCredentials.msg : null}
      </h2>
    </div>
  );
};
export default Admin;
