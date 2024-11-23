import axiosInstance from '$lib/context/api.js';

export const checkToken = async (token) => {
  try {
    const response = await axiosInstance.get(`/accounts/token-check/${token}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getCategories = async () => {
  try {
    const response = await axiosInstance.get('/categories/get/');
    return response.data.categories;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
};

export const getManufacturers = async () => {
  try {
    const response = await axiosInstance.get('/manufacturers/get/');
    return response.data.manufacturers;
  } catch (error) {
    console.error('Error fetching manufacturers:', error);
    return [];
  }
};

export const getCategory = async (category_id) => {
  try {
    if (!category_id) {
      console.error('No category_id provided');
      return null;
    }

    const response = await axiosInstance.get(`/categories/get/${category_id}/`);
    return response.data.categories || [];
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getProduct = async (product_id) => {
  try {
    const response = await axiosInstance.get(`/products/get/${product_id}/`);
    return response.data.product || [];
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getProducts = async () => {
  try {
    const response = await axiosInstance.get('/products/get/');
    return response.data.products || [];
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const addProduct = async ({ account_id, product_id, amount }) => {
  try {
    const response = await axiosInstance.post('/carts/product/add/', {
      account_id,
      product_id,
      amount,
    });

    return response.data.carts || [];
  } catch (error) {
    console.error('Error adding product:', error);
    throw error;
  }
};

export const getCart = async (account_id) => {
  try {
    const response = await axiosInstance.get(`/carts/get/${account_id}/`);
    return response.data.cart.products || [];
  } catch (error) {
    console.error('Error fetching cart:', error);
    throw error;
  }
};

export const removeProductFromCart = async (account_id, product_id) => {
  try {
    const response = await axiosInstance.delete('/carts/product/delete/', {
      data: {
        account_id,
        product_id,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error adding product:', error);
    throw error;
  }
};

export const updateProduct = async (product_id, newProduct) => {
  try {
    const response = await axiosInstance.patch(
      `/products/update/${product_id}/`,
      newProduct
    );
    return response.data.product || [];
  } catch (error) {
    console.error('Error updating product:', error);
    throw error;
  }
};

export const createProduct = async (newProduct) => {
  try {
    const response = await axiosInstance.post('/products/create/', newProduct);
    return response.data.product || [];
  } catch (error) {
    console.error('Error creating product:', error);
    throw error;
  }
};

export const getAccount = async (token) => {
  try {
    const response = await axiosInstance.get(`/accounts/token-check/${token}/`);
    return response.data.account || null;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const updateAccount = async (account_id, account) => {
  try {
    const response = await axiosInstance.patch(
      `/accounts/update/${account_id}/`,
      account
    );
    return response.data.account || [];
  } catch (error) {
    console.error('Error updating account:', error);
    throw error;
  }
};

export const getOrders = async () => {
  try {
    const response = await axiosInstance.get('/orders/get/');
    return response.data.orders || [];
  } catch (error) {
    console.error('Error fetching orders:', error);
    return [];
  }
};

export const getOrder = async (order_id) => {
  try {
    const response = await axiosInstance.get(`/orders/get/${order_id}/`);
    return response.data.order || [];
  } catch (error) {
    console.error('Error fetching order:', error);
    return [];
  }
};

export const updateOrderStatus = async (order_id, status) => {
  try {
    const response = await axiosInstance.patch(
      `/orders/change-status/${order_id}/`,
      status
    );
    return response.data.order || [];
  } catch (error) {
    console.error('Error updating order:', error);
    throw error;
  }
};

export const logIn = async (email, password) => {
  try {
    const response = await axiosInstance.post('/accounts/login', {
      username_or_email: email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error('Error updating order:', error);
    throw error;
  }
};

export const createAccount = async (newAccount) => {
  try {
    const response = await axiosInstance.post('/accounts/create/', newAccount);
    return response.data;
  } catch (error) {
    console.error('Error creating account:', error);
    throw error;
  }
};

export const updateAmountInCart = async (account_id, product_id, amount) => {
  try {
    const response = await axiosInstance.patch(
      `/carts/product/update/${product_id}/`,
      { account_id, amount }
    );
    return response.data;
  } catch (error) {
    console.error('Error adding product:', error);
    throw error;
  }
};
