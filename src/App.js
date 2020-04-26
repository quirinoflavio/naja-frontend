import React from 'react';
import './App.css';
import Login from './screens/Login/Login';
import Landing from './screens/Landing/Landing';
import { isValidToken } from './library/utils'

const App = () => (
    isValidToken() ? Landing() : Login()
  );

export default App;