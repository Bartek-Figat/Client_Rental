import React, { useState, useEffect, Fragment } from 'react';

import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../../containers/navBar';
import Footer from "../../containers/footer";

const Admin = () => {
  const [userCredentials, setUserCredentials] = useState([]);
  const [loading, setLoading] = useState(false);

  
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
        setLoading(true);
        return data;
      } catch (err) {
        if (err.response.data.error === 'Access denied') {
          localStorage.removeItem('token');
          window.location.href = '/';
        }
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
        <Fragment>
        
        </Fragment>
     <Footer/>
    </div>
  );
};
export default Admin;
