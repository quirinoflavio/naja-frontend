import React from 'react';
import  GoogleLogin from 'react-google-login'
import { Card } from 'antd';
import './Login.css'
const responseGoogle = (response) => {
    console.log(response);
}


const Login = () => {
    return (
        <div className='div-table'>
        <div className="div-cm">
            <Card title="Login" className="login-card">
                <GoogleLogin className='google-login'
                    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                    buttonText="Login com Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
            </Card>
        </div>
        </div>
    )
}

export default Login;