import React, { useState } from 'react';
import { Modal, Button, Card, Typography,Input, InputNumber } from 'antd';
import './ProductModal.css';



const ProductModal = (props) => {
  const {product, amount, price} = props.data;
  const defaultValue = amount;
  const [showModal, setShowModal] = useState(false);
  const [amountValue, setAmountValue] = useState(defaultValue);
  
  const handleIncrement = () => setAmountValue( amountValue + (1) );
  
  const handleDecrement = () => setAmountValue( amountValue - (1) );
  
  const handleChange = event => {
    setAmountValue(+(event.target.value));
  }

  const handleShowModal = () => {
    setShowModal(!showModal)
  }

  const handleCancel = () => {
    setAmountValue(defaultValue);
    setShowModal(false);
  }

  return (
      <div>
        <a type="primary" onClick={handleShowModal}>
          {product}
        </a>

        <Modal className='product-modal'
          closable= {false}
          visible={showModal}
          // onOk={this.handleOk}
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

// class ProductModal extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { 
//           display: ['none', 'inline-block', 0],
//           visible: false,
//           showItem: true,
//           data: props.data,
//           disabled: true,
//           counter: 0,
//         };
//     }


//   showModal = () => {
//     this.setState({
//       visible: true,
//     });
//   };

//   handleOk = e => {
//     // console.log(e);
//     this.setState({
//       visible: false,
//     });
//   };

//   handleEdit = () => {
//     let display = this.state.display;
//     this.setState({display: [ display[0], display[1], 1^display[2] ]})
//   }

//   handleCancel = e => {
//     console.log(13)
//     this.setState({visible: false});
//   }

//   onChange = amount => {

//     this.setState({disabled: amount===this.state.data.amount ? true : false})
//   }

//   handleSave = (amount) => {
//     let tmp = this.state.data;
//     tmp.amount = amount;
//     this.setState({data: tmp})
//     console.log(this.state.data.amount)
//   }

//   handleClose = () => {
//     this.setState({showItem: false})
//   }

//   increment = () => {
//     this.setState({counter: this.state.counter + 1})
//   }

//   decrement = () => {
//     this.setState({counter: this.state.counter - 1})
//   }

//   render() {
//     return (
//       <div>
//         <Button type="primary" onClick={this.showModal}>
//           Open Modal
//         </Button>
//         <Modal className='product-modal'
//           closable= {false}
//           visible={this.state.visible}
//           onOk={this.handleOk}
//           onCancel={this.handleCancel}
//           footer={null}>
//         {/* <Card */}
//           {/* style={{ width: 300 }}
//           cover={
//             <img
//               alt="example"
//               src="https://static.modernbike.com/256/main_2126277790_20190508093424.jpg"
//             />
//           } */}
//           <div className='product-img-div'>
//             <img className='product-img'
//                 alt="example"
//                 src="https://static.modernbike.com/256/main_2126277790_20190508093424.jpg"
//               />
//           </div>
//           <div className='product-content-div'>
//             <Typography.Text strong>Produto:</Typography.Text>
//             <Input disabled defaultValue={this.state.data.product}/>
//             <Typography.Text strong>Quantidade:</Typography.Text><br/>
//             <div className='btn-group'>
//             <Button onClick={this.increment}> + </Button>
//             <Input style={{width: '30%'}} min={0} onChange={this.onChange}  value={this.state.counter} ></Input>
//             <Button  onClick={this.decrement}>-</Button>
//             </div>
//             <Typography.Text strong>Preço:</Typography.Text>
//             <Input disabled defaultValue={this.state.data.price}/>
            
            
//             <div className='modal-footer'>
//               {/* <Button className='modal-footer-button'onClick={this.handleCancel}>Fechar</Button>
//               <Button className='modal-footer-button'onClick={_ => this.handleSave(this)} disabled={this.state.disabled}>Salvar</Button> */}
//             </div>
//             {!this.showItem && <Button  className='cancel-button' onClick={() => this.setState({ showItem: false })}>Cancelar</Button>}
//            {this.showItem && <Button  className='cancel-button' onClick={() => this.setState({ showItem: false })}>Fechar</Button>}
//           </div>
//         </Modal>
//       </div>
//     );
//   }
// }

export default ProductModal;