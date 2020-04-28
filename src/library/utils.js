export const BASE_URL = 'https://naja-backend.herokuapp.com';

export const DEV_URL = 'http://localhost:3333';

export const TOKEN = 'TOKEN';
export const getToken = () => localStorage.getItem(TOKEN);

const routes = {
  category: '/category/',
  product: '/product/',
};

const headers = {
  Authorization: getToken(),
  'Content-Type': 'application/json',
};
export const getCurrentUser = () =>
  fetch(`${BASE_URL}/loggedUser`, {
    method: 'get',
    headers: headers,
  });

export const getCategoryById = (id) =>
  fetch(BASE_URL + routes.category + id, {
    method: 'get',
    headers: headers,
  });

// ------------------- DONE -------------------------
export const getCategories = () =>
  fetch(BASE_URL + routes.category, {
    method: 'get',
    headers: headers,
  });

// ------------------- DONE -------------------------
export const getProductsByCategory = (categoryId) =>
  fetch(BASE_URL + routes.category + categoryId, {
    method: 'get',
    headers: headers,
  });

// ------------------- DONE -------------------------
export const addCategory = (name) =>
  fetch(BASE_URL + routes.category, {
    method: 'post',
    headers: headers,
    body: JSON.stringify({ name }),
  });

// -------------- DONE --------------------
export const addProduct = (product) => {
  console.log(product);
  return fetch(BASE_URL + routes.product, {
    method: 'post',
    headers: headers,
    body: JSON.stringify(product),
  });
};

// ======================== DONE ============================
export const updateProduct = (product) => {
  return fetch(BASE_URL + routes.product + product.id, {
    method: 'put',
    headers: headers,
    body: JSON.stringify(product),
  });
};

// ============================ DONE =========================
export const deleteCategory = (categoryId) =>
  fetch(BASE_URL + routes.category + categoryId, {
    method: 'delete',
    headers: headers,
  });

// ===================  DONE ==================
export const deleteProduct = (product) =>
  fetch(BASE_URL + routes.product + product.id, {
    method: 'delete',
    headers: headers,
  });

export const logout = () => {
  localStorage.removeItem('TOKEN');
  loginRedirect();
};

export const loginRedirect = () => {
  window.location.reload();
};

export const isValidToken = async () => {
  const token = getToken();

  const response = await fetch(`${BASE_URL}/private`, {
    method: 'get',
    mode: 'cors',
    headers: { Authorization: token },
  });
  console.log('response.ok', response.ok);
  return response.ok;
};
export const addKey = (list) => {
  list.forEach(function (element) {
    element.key = element.id;
  });
};
