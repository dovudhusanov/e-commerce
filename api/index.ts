import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:3000/api",
});

axiosInstance.interceptors.request.use((req) => {
    if (localStorage.getItem("admin")) {
        req.headers.Authorization = `Bearer ${
            // @ts-ignore
            JSON.parse(localStorage.getItem("admin")).token
        }`;
    }
    return req;
});

export default axiosInstance;