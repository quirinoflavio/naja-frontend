const dataSource = [
    {
      key: '1',
      category: 'TV',
      unique: 32,
      action: '[ ]',
    },
    {
      key: '2',
      category: 'Geladeira',
      unique: 51,
      action: '[ ]',
    },
    {
        key: '3',
        category: 'Eletrodoméstico',
        unique: 123,
        action: '[ ]',
    },
    {
        key: '4',
        category: 'Computador',
        unique: 32,
        action: '[ ]',
    },
    {
        key: '5',
        category: 'Desktop',
        unique: 51,
        action: '[ ]',
    },
    {
    key: '6',
    category: 'Periférico',
    unique: 52,
    action: '[ ]',
    },
    {
    key: '7',
    category: 'Dispositivo',
    unique: 52,
    action: '[ ]',
    },
    {
    key: '8',
    category: 'Acessório',
    unique: 113,
    action: '[ ]',
    },{
    key: '9',
    category: 'Notebook',
    unique: 633,
    action: '[ ]',
    },{
    key: '10',
    category: 'Gamer',
    unique: 70,
    action: '[ ]',
    },{
    key: '11',
    category: 'Teclado',
    unique: 51,
    action: '[ ]',
    }
  ];
  
  const columns = [
    {
      title: 'Categoria',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Produtos Únicos',
      dataIndex: 'unique',
      key: 'unique',
    },
    {
      title: 'Ação',
      dataIndex: 'action',
      key: 'action',
    },
  ];

export {dataSource, columns};