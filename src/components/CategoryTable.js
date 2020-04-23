import React from 'react';
import { Table, Button, Popconfirm } from 'antd';
import '../styles/CategoryTable.css';
import { dataSource as data } from '../mock/CategoryTable';
import { Link } from 'react-router-dom'

const columns = [
  {
    title: 'Categoria',
    dataIndex: 'category',
    key: 'category',
    render: (text) => <Link to={text}>{text}</Link>,
  },
  {
    title: 'Produtos Únicos',
    dataIndex: 'unique',
    key: 'unique',
  },
  {
    title: 'Ação',
    dataIndex: 'action',
    key: 'action',
    render: (text, record) =>
          
            <Popconfirm okText='Sim' cancelText='Cancelar' title="Apagar Categoria?" onConfirm={() => console.log("apagado")}>
              <a>Apagar</a>
            </Popconfirm>
          
  }

];

const CategoryTable = () => {
  return (
    <div>
      <div className='pop-button'>
        {/* {this.actionBar()} */}
        <Button> Registrar Categoria </Button>
      </div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
}



export default CategoryTable;

