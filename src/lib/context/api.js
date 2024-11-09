import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

const api = axios.create({
    headers: {
        "API-KEY": "test"
    },
    baseURL: apiUrl
});

export default api;