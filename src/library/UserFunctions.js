import axios from 'axios';

const signIn = async (type, userData) => {
    let baseURL = 'algo';
    let response = await axios.post(baseURL+type, userData);
    console.log(response);
    return response;
}

const logout = () => {
    localStorage.removeItem('usertoken');
    loginRedirect();
}

const loginRedirect = () => {
    window.location.reload();
}

const isValidToken = () => {
    return true;
}

export {signIn, logout, loginRedirect, isValidToken};