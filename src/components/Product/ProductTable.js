import React from 'react';
import { Table, Popconfirm, Popover } from 'antd';
import './ProductTable.css';
import ProductModal from './ProductModal';


const ProductTable = (props) => {


  const handleRowClassName = ({ quantity }) => {
    if (quantity === 0) return 'bg-red'
    else if (quantity < 10) return 'bg-yellow'
    else return ''
  }

  const dataSource = props.dataSource;


  const columnsConfig = [
    {
        title: 'Foto',
        dataIndex: 'picture',
        key: 'picture',
        render: (url) => (
            <div className='img-div'> 
                <Popover
                    placement="topLeft" 
                    content={<img className='zoom-img' src={url}></img>}>
                    <img className='thumb-img'src={url}></img>
                </Popover>
            </div>
        )
    },
    {
        title: 'Produto',
        dataIndex: 'name',
        key: 'name',
        render: (text, record) => <ProductModal submit={props.submit} data={record}/> 
    },
  {
    title: 'Quantidade',
    dataIndex: 'quantity',
    key: 'quantity',
  },
  {
    title: 'Preço',
    dataIndex: 'value',
    key: 'value',
  },
  {
    title: 'Ação',
    dataIndex: 'action',
    key: 'action',
    render: (text, record) => ( <Popconfirm okText='Sim' cancelText='Cancelar' title="Apagar Produto?" onConfirm={() => props.onDelete(record)}>
                      <a>Apagar</a>
                    </Popconfirm>) 
  }

];

  return (
    <div>
      <Table rowClassName={handleRowClassName} pagination={{showSizeChanger: false}} columns={columnsConfig} dataSource={dataSource} />
    </div>
  );
}



export default ProductTable;

