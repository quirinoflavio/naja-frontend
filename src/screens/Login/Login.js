import React, { useState } from 'react';
import GoogleLogin from 'react-google-login';
import { Card, Alert } from 'antd';
import './Login.css';
import { isValidToken } from '../../library/utils';

const Login = () => {
  const [loginError, setLoginError] = useState(false);

  const responseGoogle = (response) => {
    localStorage.setItem('TOKEN', 'Bearer ' + response.tokenId);
    console.log(localStorage.getItem('TOKEN'));
    isValidToken();
  };

  const responseErrorGoogle = () => {
    setLoginError(true);
    setTimeout(setLoginError(false), 3000);
  };

  const handleAlertClose = () => {
    setLoginError(false);
  };

  return (
    <div className="div-table">
      <div className="div-cm">
        {!loginError || (
          <Alert
            message={'Erro ao logar'}
            type="error"
            closable
            afterClose={handleAlertClose}
          />
        )}
        <Card title="Login" className="login-card">
          <GoogleLogin
            className="google-login"
            clientId={
              '775527554145-tlh2oabm8bd4bj0r01qa1tmi2fs1e7cq.apps.googleusercontent.com'
            }
            buttonText="Login com Google"
            onSuccess={responseGoogle}
            onFailure={responseErrorGoogle}
            cookiePolicy={'single_host_origin'}
          />
        </Card>
      </div>
    </div>
  );
};

export default Login;
