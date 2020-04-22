import React from 'react';
import { Layout } from 'antd';
import './App.css';
import Login from './screens/Login';
import Landing from './screens/Landing';
import { isValidToken } from './library/UserFunctions'

const App = () => (
    isValidToken() ? Landing() : Login()
  );


export default App;