import React from 'react';
import { Table, Popconfirm } from 'antd';
import './CategoryTable.css';
import { Link } from 'react-router-dom'

const CategoryTable = (props) => {
  const dataSource = props.dataSource;
  const onDelete = props.onDelete;


  const columns = [
    {
      title: 'ID',
      dataIndex: 'idCategory',
      key: 'idCategory',
      render: (text, record) => record.id
    },
    {
      title: 'Categoria',
      dataIndex: 'name',
      key: 'name',
      render: (text, record) => <Link to={`/category/${record.id}`}>{text}</Link>,
    },
    
    {
      title: 'Ação',
      dataIndex: 'action',
      key: 'action',
      render: (text, record) =>
        <Popconfirm okText='Sim' cancelText='Cancelar' title="Apagar Categoria?" onConfirm={() => onDelete(record.id)}>
          <a>Apagar</a>
        </Popconfirm>
    }

  ];

  return (
    <div>
      <Table pagination={{ showSizeChanger: false }} columns={columns} dataSource={dataSource} />
    </div>
  );
}



export default CategoryTable;

