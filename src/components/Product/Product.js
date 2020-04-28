import React, { Fragment, useState, useEffect} from 'react';
import ProductTable from './ProductTable';
import { getProductsByCategory, addProduct, updateProduct, deleteProduct, addKey, getCategoryById } from '../../library/utils';
import { Button, Modal, Typography, Input } from 'antd';
import UploadImage from '../Upload/UploadImage'
import { useParams } from 'react-router-dom';


const Product = () => {
    const [ data, setData ] = useState(null);
    const [ visible, setVisible ] = useState(false);
    const [ name, setName ] = useState('');
    const [ quantity, setQuantity] = useState(NaN);
    const [ value, setValue ] = useState(NaN);
    const [ loading, setLoading] = useState(false);
    const [ picture, setPicture ] = useState('');
    const [ categoryName, setCategoryName ] = useState('');

    let { category } = useParams();
    let idCategory = category;


    const reset = () => {
        setName('');
        setQuantity('');
        setValue('');
        setPicture('');
    }

    const onUpload = (image) => {
        setPicture(image);
    }

    const getCategoryName = () => {
        getCategoryById(idCategory).then(response => {
            if(response.status === 200) {
                return response.json()
            }
            else {
                console.log(response)
            }
        })
        .then(res => setCategoryName(res.name))
        .catch(error => console.log(error));
    }

    const onDelete = (product) => {
        deleteProduct(product).then(response => {
            if(response.status === 200) {
                fetchData()
            }
            else {
                console.log(response)
            }
        })
        .catch(error => console.log(error));  
    }
    
    const submit = (product) => {
        if (product) {
            updateProduct(product).then(response => {
                if(response.status === 200) {
                    fetchData()
                }else {
                    console.log(response)
                }
                
            })
            .catch(error => console.log(error));
        }else {     
            addProduct({picture, name, quantity, idCategory, value}).then(response => {
                if(response.status === 201) {
                    setVisible(false)

                    fetchData()
                }
                else {
                    console.log(response)
                }
                return response.json();
            })
            .then(res => console.log(res))
            .catch(error => console.log(error));
        }     
    }
    
    const fetchData = () => {
        getProductsByCategory(idCategory).then(response => {
            if (response.status === 200) {
              return response.json()
            }
          })
          .then(datajson => {
            addKey(datajson.products)
            setData(datajson.products)
          })
          .catch(error => console.log(error))
    }
    
    useEffect(() => {
        fetchData();
        getCategoryName()
    }, [])

    useEffect(() => {
        reset();
    }, [visible])
    

    return (
        
        <Fragment>
            <div className='reg-cat'>
                <Typography.Title level={4} style={{display: 'inline-block', float: 'left'}}>{categoryName}</Typography.Title>
                <Button className='btn-reg-cat' onClick={() => setVisible(true) }> Registrar Produto </Button>
            </div>
            <Modal 
                visible={visible} 
                onCancel={() => setVisible(false)}
                onOk={() => {submit(false)}}
                okButtonProps={{disabled: (value < 0 || isNaN(value)) || (quantity < 0 || isNaN(quantity)) || (name == null || name === '') }}
                confirmLoading={loading}>
                <UploadImage image={picture} onUpload={onUpload}/>

                <Typography.Text strong>Nome:</Typography.Text>
                <Input value={name} onChange={(e) => setName(e.target.value)}></Input>
                
                <Typography.Text strong>Preço:</Typography.Text>
                <Input value={value} onChange={(e) => setValue(e.target.value)}></Input>
                
                <Typography.Text strong>Quantidade:</Typography.Text>
                <Input value={quantity} onChange={(e) => setQuantity(e.target.value)}></Input>
                

            </Modal>
            <ProductTable onDelete={onDelete} submit={submit} dataSource={data} />
        </Fragment>
    )
}

export default Product;