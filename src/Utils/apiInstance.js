import axios from "axios";

export const apiInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL_SIOSA,
    headers: {
        "Content_Type": "aplication/json",
    }
})

export const apiInstanceMulti = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL_SIOSA,
    headers: {
        "Content_Type": "multipart/form-data"
    }
})