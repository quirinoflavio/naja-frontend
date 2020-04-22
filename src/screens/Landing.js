import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";
import { dataSource, columns } from '../mock/CategoryTable';
import { Layout } from 'antd';
import NavBar from '../components/NavBar';
import CategoryTable from '../components/CategoryTable';
import { Button } from 'antd';
import '../styles/Landing.css';


const { Header, Content, Footer } = Layout;

const actionBar = () => {
    return(
        <div className='reg-cat'>
            <Button> Registrar Categoria </Button>
        </div>
    );
}

const Landing = () => {
    return (
        <Router>
            <Layout>
            <Header className='site-header'>
                <NavBar/>
            </Header>

            <Content className="site-body" >
                {actionBar()}
                <CategoryTable dataSource={dataSource} columns={columns}/>
            </Content>
            
            <Footer className='site-footer'>
                NAJA Gerenciamento de Estoque | Flávio Roberto e Matheus Santana - 2020
            </Footer>
            </Layout>
        </Router>
    );
}

export default Landing;