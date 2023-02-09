import React, { useState, useEffect } from 'react';
import { Table, Form, Input, Button, Popconfirm } from 'antd';

const EmployeeTable = props => {
    // State and setState declarations
    const [data, setData] = useState([]);
    const [editingKey, setEditingKey] = useState('');
    // ...
  

  
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      editable: true,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      editable: true,
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      editable: true,
    },
    {
      title: 'Action',
      dataIndex: 'operation',
      render: (_, record) => {
        // ...
      },
    },
  ];
  

  const isEditing = record => record.key === editingKey;



  const edit = record => {
    form.setFieldsValue({
      name: '',
      age: '',
      address: '',
      ...record,
    });
    setEditingKey(record.key);
  };
  


  const cancel = () => {
    setEditingKey('');
  };
  


  const save = async key => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex(item => key === item.key);
  
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setData(newData);
        setEditingKey('');
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };





  const deleteRow = key => {
    const newData = [...data];
    setData(newData.filter(item => item.key !== key));
  };
  


  useEffect(() => {
    setData([
      {
        key: '1',
        name: 'John Doe',
        age: 32,
        address: 'New York',
      },
      {
        key: '2',
        name: 'Chris Patt',
        age: 42,
        address: 'New York',
      },
      // ...
    ]);
  }, []);
  

  const [form] = Form.useForm();

  return (
    <Form form={form} component={false}>
      <Table
        bordered
        dataSource={data}
        columns={columns}
        rowClassName="editable-row"
      />
    </Form>
    );
  
  };
  export default EmployeeTable
  





