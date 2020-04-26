import React from 'react';
import { Table, Popconfirm, Popover } from 'antd';
import './ProductTable.css';
import ProductModal from './ProductModal';


const ProductTable = (props) => {

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
    dataIndex: 'amount',
    key: 'amount',
  },
  {
    title: 'Preço',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Ação',
    dataIndex: 'action',
    key: 'action',
    render: () => ( <Popconfirm okText='Sim' cancelText='Cancelar' title="Apagar Categoria?" onConfirm={() => console.log("apagado")}>
                      <a>Apagar</a>
                    </Popconfirm>) 
  }

];

  return (
    <div>
      <Table pagination={{showSizeChanger: false}} columns={columnsConfig} dataSource={dataSource} />
    </div>
  );
}



export default ProductTable;

