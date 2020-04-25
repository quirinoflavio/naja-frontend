import React from 'react';
import { Table, Button, Popconfirm, Popover, Modal } from 'antd';
import '../styles/ProductTable.css';
import ProductModal from './ProductModal';

const columns = [
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
        // render: (text, record) =>(
        //  <ProductItem product={record}/>
        // )
        render: (text, record) => <ProductModal data={record}/> 
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
    render: (text, record) =>
          
            <Popconfirm okText='Sim' cancelText='Cancelar' title="Apagar Categoria?" onConfirm={() => console.log("apagado")}>
              <a>Apagar</a>
            </Popconfirm>
          
  }

];

const ProductTable = (props) => {

  return (
    <div>
      <div className='pop-button'>
        {/* {this.actionBar()} */}
        <Button> Cadastrar Produto </Button>
      </div>
      <Table columns={columns} dataSource={props.dataSource} />
    </div>
  );
}



export default ProductTable;

