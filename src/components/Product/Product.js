import React, { Fragment, useState, useEffect} from 'react';
import ProductTable from './ProductTable';
import { getProductsByCategory, addProduct } from '../../library/utils';
import { Button, Modal, Upload, Typography, Input } from 'antd';
import { useParams } from 'react-router-dom';


const Product = () => {
    const [ data, setData ] = useState(null);
    const [ visible, setVisible ] = useState(false);
    const [ name, setName ] = useState('');
    const [ amount, setAmount] = useState(0);
    const [ price, setPrice ] = useState(0);
    const [ loading, setLoading] = useState(false);
    let { category } = useParams();

    const submit = () => {
        addProduct({name, amount, price}, category).then(response => {
            if(response.status === 201) {
                setVisible(false)
                fetchData()
            }
            else {
                console.log(response)
            }
        })
        .catch(error => console.log(error));  
    }
    
    const fetchData = () => {
        getProductsByCategory(category).then(response => {
            if (response.status === 200) {
              return response.json()
            }
          })
          .then(datajson => {
            setData(datajson)
          })
          .catch(error => console.log(error))
    }
    
    useEffect(() => {
        fetchData(data, setData);
    }, [])

    return (
        <Fragment>
            <div className='reg-cat'>
                <Button onClick={() => setVisible(true) }> Registrar Produto </Button>
            </div>
            <Modal 
                visible={visible} 
                onCancel={() => setVisible(false)}
                onOk={submit}
                okButtonProps={
                    {disabled: 
                    (name == null || name === '') || (price == null || price === '') || (amount == null || amount === '')
                    }}
                confirmLoading={loading}>
                <Upload/>

                <Typography.Text strong>Nome:</Typography.Text>
                <Input onChange={(e) => setName(e.target.value)}></Input>
                
                <Typography.Text strong>Preço:</Typography.Text>
                <Input onChange={(e) => setAmount(e.target.value)}></Input>
                
                <Typography.Text strong>Quantidade:</Typography.Text>
                <Input onChange={(e) => setPrice(e.target.value)}></Input>
                

            </Modal>
            <ProductTable dataSource={data} />
        </Fragment>
    )
}

export default Product;