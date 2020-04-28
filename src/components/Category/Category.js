import React, { Fragment, useState, useEffect} from 'react';
import CategoryTable from './CategoryTable';
import { getCategories, addCategory, deleteCategory, addKey } from '../../library/utils';
import { Button, Modal, Typography, Input } from 'antd';

const Category = () => {
    const [ data, setData ] = useState(null);
    const [ visible, setVisible ] = useState(false);
    const [ newCategory, setNewCategory ] = useState(null);
    const [ loading, setLoading] = useState(false);


    const onDelete = (category) => {
        deleteCategory(category).then(response => {
            if(response.status === 200) {
                fetchData()
            }
            else {
                console.log(response)
            }
        })
        .catch(error => console.log(error));  
    }

    const submit = () => {
        addCategory(newCategory).then(response => {
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
        getCategories().then(response => {
            if (response.status === 200) {
              return response.json()
            }
          })
          .then(datajson => {
            addKey(datajson)
            setData(datajson)
          })
          .catch(error => console.log(error))
    }


    useEffect(() => {
        fetchData();
    }, [])

    useEffect(() => setNewCategory(''), [visible])

    return (
        <Fragment>
            <div className='reg-cat'>
            <Typography.Title level={4} style={{display: 'inline-block', float: 'left'}}>Categorias</Typography.Title>
            <Button className='btn-reg-cat' onClick={() => setVisible(true) } > Registrar Categoria </Button>
            </div>
            <Modal 
                visible={visible} 
                onCancel={() => setVisible(false)}
                onOk={submit}
                okButtonProps={{disabled: (newCategory == null || newCategory === '')}}
                confirmLoading={loading}>
                <Typography.Title level={3}>Digite o nome da nova categoria: </Typography.Title>
                <Input value={newCategory} onChange={(e) => setNewCategory(e.target.value)}></Input>
            </Modal>
            <CategoryTable onDelete={onDelete} dataSource={data} />
        </Fragment>
    )
}

export default Category;