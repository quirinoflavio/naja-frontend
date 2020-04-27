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
                    clientId="902162089319-bh2bqv7p1j2bla0v5hsetc4ti7kpcvr9.apps.googleusercontent.com"
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