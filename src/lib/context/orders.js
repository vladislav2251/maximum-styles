import api from "@context/api.js";

// Создание закзаа происходит со страницы чекаута (где человек заполняет данные и отправляет их)
export const createOrder = async (orderData) => {
    try {
        const response = await api.post("/orders/create/", orderData);
    } catch (error) {
        console.error(error);
    }
}

export const getOrders = async () => {
    try {
        const response = await api.get("/orders/get/");
        return response.data.orders || [];
    } catch (error) {
        console.error(error);
        return [];
    }
}

export const getOrder = async (orderID) => {
    try {
        const response = await api.get(`/orders/get/${orderID}/`);
        return response.data.order || null;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const changeOrderStatus = async (orderID, status) => {
    try {
        const response = await api.patch(`/orders/get/${orderID}/`, { status });
        return response.data.order || null;
    } catch (error) {
        console.error(error);
        return null;
    }
}