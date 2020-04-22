import React from 'react';
import { Table } from 'antd';
import '../styles/CategoryTable.css';

class CategoryTable extends React.Component {
    

    constructor(props) {
        super(props);
        this.state = {
            columns : props.columns,
            data : props.dataSource
        }
    }

    

    render() {
        return (
            <div
                className="CategoryTable">
                <Table
                    dataSource={this.state.data} columns={this.state.columns} 
                />;
            </div>
        );

    }
};



export default CategoryTable;

