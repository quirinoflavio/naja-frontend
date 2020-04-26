import React from 'react';
import { Table, Popconfirm } from 'antd';
import './CategoryTable.css';
import { Link } from 'react-router-dom'

const CategoryTable = ( props ) => {
  const dataSource = props.dataSource;
  const onDelete = props.onDelete;

  const columns = [
    {
      title: 'Categoria',
      dataIndex: 'category',
      key: 'category',
      render: (text) => <Link to={'/categories/' +text}>{text}</Link>,
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
              <Popconfirm okText='Sim' cancelText='Cancelar' title="Apagar Categoria?" onConfirm={() => onDelete(record.category)}>
                <a>Apagar</a>
              </Popconfirm>       
    }
  
  ];

  return (
    <div>
      <Table pagination={{showSizeChanger: false}} columns={columns} dataSource={dataSource} />
    </div>
  );
}



export default CategoryTable;

