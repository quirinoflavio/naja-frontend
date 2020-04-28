import React from 'react';
import { Menu, Button } from  'antd';
import './NavBar.css'
import {logout, loginRedirect, isValidToken} from '../../library/utils';
const FIXEME = 'reSOLva-ME';

 

const user = () => {
    return (
    <div className='user-mini'>
        {/* name and profile picture */}
        {FIXEME} 
        <img src={FIXEME}></img>
        <Button onClick={logout}>Sair</Button>
    </div>);
}

const logo = () => {
    return (
    <div className='div-logo'>
        <img className='logo' src='https://dewey.tailorbrands.com/production/brand_version_mockup_image/485/2919481485_8f57b47c-ec69-4d10-8c00-574dddb47a80.png?cb=1588036778'/>
    </div>);
}

const NavBar = () => {
    if (!isValidToken()) loginRedirect();
    return (
        <div> 
            <Menu className='nav-menu' mode='horizontal'>
                <Menu.Item>
                     {logo()}
                </Menu.Item>

                <Menu.Item className='last-item'>
                    {user()}
                </Menu.Item>
                
            </Menu> 
        </div>
    );
}

export default NavBar;