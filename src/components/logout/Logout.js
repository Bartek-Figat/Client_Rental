import axios from 'axios';

async function Logout() {
   const jwt = localStorage.getItem('token');
   await axios.delete('http://localhost:8080/logout', {
     credentials: 'include',
     headers: {
       'x-access-token': jwt,
     },
   });
  localStorage.removeItem('token');
  window.location.href = "/";
  
}

export default Logout;
