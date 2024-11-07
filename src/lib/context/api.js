import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://162.19.155.230:4000/"
});

export default axiosInstance; 