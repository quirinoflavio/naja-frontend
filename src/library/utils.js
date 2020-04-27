export const BASE_URL = 'http://localhost:3003'

export const TOKEN = 'naja_token';
export const getToken = () => localStorage.getItem(TOKEN);

const headers = {
    Authorization: getToken(),
    "Content-Type": "application/json"
};
export const getCurrentUser = () => fetch(
  `${BASE_URL}/loggedUser`,
  {
    method: 'get',
    headers: headers
  }
)

export const getCategories = () => fetch(
    `${BASE_URL}/categories/`,
    {
      method: 'get',
      headers: headers
    }
  )


export const getProductsByCategory = category => fetch(
  `${BASE_URL}/categories/${category}`,
  {
    method: 'get',
    headers: headers
  }
)


export const addCategory = name => fetch(
  `${BASE_URL}/categories/`,
  {
    method: 'post',
    headers: headers,
    body: JSON.stringify({ name })
  }
)

export const addProduct = ({name, amount, price}, category) => fetch(
  `${BASE_URL}/categories/${category}`,
  {
    method: 'post',
    headers: headers,
    body: JSON.stringify({name, amount, price})
  }
)



export const updateProduct = (product , category)=> fetch(
  `${BASE_URL}/categories/${category}`,
  {
    method: 'put',
    headers: headers,
    body: JSON.stringify({product})
  }
)

export const deleteCategory = category => fetch(
  `${BASE_URL}/categories/${category}`,
  {
    method: 'delete',
    headers: headers,
  }
)

export const deleteProduct = (product, category) => fetch(
  `${BASE_URL}/categories/${category}/${product}`,
  {
    method: 'delete',
    headers: headers,
  }
)


export const logout = () => {
    localStorage.removeItem('TOKEN');
    loginRedirect();
}

export const loginRedirect = () => {
    window.location.reload();
}

export const isValidToken = () => {
    return false;
}
