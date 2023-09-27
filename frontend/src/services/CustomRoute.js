import React from 'react';
import { Navigate } from 'react-router-dom';

const CustomRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('userID');

  if (!isAuthenticated) {
    // If the user is not authenticated, redirect them to the login page
    return <Navigate to="/login" />;
  }

  return children;
}

export default CustomRoute;
