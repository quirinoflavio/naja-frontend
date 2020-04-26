import React, { useState } from 'react';
import { Modal, Button, Typography,Input } from 'antd';
import './ProductModal.css';


const ProductModal = (props) => {

  const {product, amount, price} = props.data;
  const [showModal, setShowModal] = useState(false);
  const [amountValue, setAmountValue] = useState(amount);

  const handleIncrement = () => setAmountValue( amountValue + (1) );
  
  const handleDecrement = () => {
    if (amountValue > 0) setAmountValue( amountValue - (1) );
  }
  const handleChange = event => {
    let value = event.target.value;
    if (!isNaN(value) && value >= 0) setAmountValue(+(event.target.value));
  }

  const handleShowModal = () => {
    setShowModal(!showModal)
  }

  const handleCancel = () => {
    setAmountValue(amount);
    handleShowModal()
  }

  const submit = () => {
    let p = {product, amountValue, price}
    props.submit(p)
    handleShowModal()
  }


  return (
      <div>
        <a type="primary" onClick={handleShowModal}>
          {product}
        </a>

        <Modal className='product-modal'
          closable= {false}
          visible={showModal}
          onOk={submit}
          onCancel={handleCancel}
          >

          <div className='product-img-div'>
            <img className='product-img'
                alt="example"
                src="https://static.modernbike.com/256/main_2126277790_20190508093424.jpg"
              />
          </div>
          
          <div className='product-content-div'>
            <Typography.Text strong>Produto:</Typography.Text>
            <Input disabled value={product}/>
            <div className='btn-group'>
              <Typography.Text strong>Quantidade:</Typography.Text><br/>
              <Button onClick={handleIncrement}> + </Button>
              <Input style={{width: '30%'}} onChange={handleChange}  value={amountValue} ></Input>
              <Button  onClick={handleDecrement}>-</Button>
            </div>
            <Typography.Text strong>Preço:</Typography.Text>
            <Input disabled defaultValue={price}/>
          </div>
        </Modal>
      </div>
  );
}



export default ProductModal;