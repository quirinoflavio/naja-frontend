import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './screens/Login/Login';
import Landing from './screens/Landing/Landing';
import { isValidToken } from './library/utils';
import Routes from './Routes';

const App = () => {
  return <Routes />;
};
export default App;
