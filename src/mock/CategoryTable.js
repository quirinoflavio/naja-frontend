const dataSource = [
    {
      key: '1',
      category: 'TV',
      unique: 32,
    },
    {
      key: '2',
      category: 'Geladeira',
      unique: 51,
      
    },
    {
        key: '3',
        category: 'Eletrodoméstico',
        unique: 123,
        
    },
    {
        key: '4',
        category: 'Computador',
        unique: 32,
        
    },
    {
        key: '5',
        category: 'Desktop',
        unique: 51,
        
    },
    {
    key: '6',
    category: 'Periférico',
    unique: 52,
    
    },
    {
    key: '7',
    category: 'Dispositivo',
    unique: 52,
    
    },
    {
    key: '8',
    category: 'Acessório',
    unique: 113,
    
    },{
    key: '9',
    category: 'Notebook',
    unique: 633,
    
    },{
    key: '10',
    category: 'Gamer',
    unique: 70,
    
    },{
    key: '11',
    category: 'Teclado',
    unique: 51,
    
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
    }
  ];

export {dataSource, columns};