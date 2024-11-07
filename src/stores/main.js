import axiosInstance from "$lib/context/api.js";

export const getCategories = async () => {
    try {
        const response = await axiosInstance.get("/categories/get/");
        return response.data.categories;
    } catch (error) {
        console.error(error);
        return [];
    }
};

export const getCategory = async (category_id) => {
    try {
        if (!category_id) {
            console.error("No category_id provided");
            return null; 
        }

        const response = await axiosInstance.get(`/category/get/${category_id}/`);
        return response.data.category;
    } catch (error) {
        console.error(error);
        return null; 
    }
};

export const getProduct = async (product_id) => {
    try {
        const response = await axiosInstance.get(`/products/get/${product_id}/`);
        return response.data.product;
    } catch (error) {
        console.error(error);
        return null; 
    }
};
