import React, { useState } from 'react';
import { Modal, Button, Typography,Input } from 'antd';
import './ProductModal.css';


const ProductModal = (props) => {

  const {id, picture, idCategory, name, quantity, value} = props.data;
  const [showModal, setShowModal] = useState(false);
  const [amountValue, setAmountValue] = useState(quantity);

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
    setAmountValue(quantity);
    handleShowModal()
  }

  const submit = () => {
    let p = {id, idCategory, picture, name, quantity, value}
    p.quantity = amountValue;
    props.submit(p)
    handleShowModal()
  }


  return (
      <div>
        <a type="primary" onClick={handleShowModal}>
          {name}
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
                src={picture}
              />
          </div>
          
          <div className='product-content-div'>
            <Typography.Text strong>Produto:</Typography.Text>
            <Input disabled value={name}/>
            <div className='btn-group'>
              <Typography.Text strong>Quantidade:</Typography.Text><br/>
              <Button onClick={handleIncrement}> + </Button>
              <Input style={{width: '30%'}} onChange={handleChange}  value={amountValue} ></Input>
              <Button  onClick={handleDecrement}>-</Button>
            </div>
            <Typography.Text strong>Preço:</Typography.Text>
            <Input disabled defaultValue={value}/>
          </div>
        </Modal>
      </div>
  );
}



export default ProductModal;