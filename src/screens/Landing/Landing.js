import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";
import { Layout } from 'antd';
import NavBar from '../../components/Header/NavBar';
import Category from '../../components/Category/Category';
import Product from '../../components/Product/Product';
import './Landing.css';


const { Header, Content, Footer } = Layout;


const Landing = () => {
    return (
        <Router>
            <Layout>
            <Header className='site-header'>
                <NavBar/>
            </Header>

            <Content className="site-body" >
                
                <Switch>
                    <Route exact path="/category/">
                        <Category/>
                    </Route>
                    <Route path="/category/:category">
                        <Product/>
                    </Route>
                    <Route path="/">
                        {<Redirect to='category'/>}
                    </Route>
                </Switch>
                
            </Content>
            
            <Footer className='site-footer'>
                NAJA Gerenciamento de Estoque | Flávio Roberto e Matheus Santana - 2020
            </Footer>
            </Layout>
        </Router>
    );
}

export default Landing;