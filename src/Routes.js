import React, { useState, useEffect } from 'react';
import {
  Switch,
  Route,
  Router,
  useHistory,
  useLocation,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Login from './screens/Login/Login';
import Landing from './screens/Landing/Landing';
import { isValidToken } from './library/utils';

const Loading = () => {
  return <h1>Carregando</h1>;
};

export default function Routes() {
  const [isAuth, setIsAuth] = useState(false);
  const history = createBrowserHistory();

  useEffect(() => {
    (async () => {
      console.log('Entrou');
      let auth = await isValidToken();
      console.log('Saiu');
      console.log(auth);
      if (auth) {
        history.push('/landing');
      } else {
        history.push('/login');
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Router history={history}>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/landing">
          <Landing />
        </Route>
      </Switch>
    </Router>
  );
}
/*  useEffect(() => {
    if (localStorage.getItem('TOKEN')) {
      setSignedIn(true);
    }
  }, []);

  useEffect(() => {
    (async function tokenValidation() {
      setValidToken(isValidToken());
    })();
  }, [signedIn]);

  if (!signedIn) {
    return <Login />;
  }
  if (signedIn && !validToken) {
    return <Loading />;
  } else {
    return <Landing></Landing>; */
