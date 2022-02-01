import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const Logout = ({ setToken }) => {
  useEffect(() => {
    setToken(null);
    localStorage.clear()
  });
  return <Navigate to='/' />
};

export default Logout;
