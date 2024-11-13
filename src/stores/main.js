import axiosInstance from '$lib/context/api.js';

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

export const addProduct = async (account_id, product_id, amount) => {
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

export const removeProductFromCart = async () => {
    try {
        const response = await axiosInstance.post('/carts/product/delete/', {
            account_id,
            product_id,
        });

        return response.data.carts || [];
    } catch (error) {
        console.error('Error adding product:', error);
        throw error;
    }
}

export const substructProductFromCart = async () => {
    try {
        const response = await axiosInstance.post('/carts/product/subtract/', {
            account_id,
            product_id,
        });

        return response.data.carts || [];
    } catch (error) {
        console.error('Error adding product:', error);
        throw error;
    }
}

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

export const getAccount = async (token) => {
    try {
        const response = await axiosInstance.get(`/accounts/token-check/${token}/`);
        return response.data.account || null
    } catch (error) {
        console.error(error)
        return null
    }
}