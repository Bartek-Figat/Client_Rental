import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../containers/navBar';

const Admin = () => {
  const [userCredentials, setUserCredentials] = useState([]);

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
        setUserCredentials(data);

        return data;
      } catch (err) {
        console.log(err);
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
