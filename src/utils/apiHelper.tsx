import axios from "axios";

export const BASE_URL_API: string = "http://localhost:1337";
export const BASE_URL_BACKEND: string = "https://worldlyfrogs-us.backendless.app/"
export const BASE_URL_AUTH: string = "https://api.backendless.com/BC8BCE57-8FD8-4432-AF20-5ACF782685A0/449652CC-115D-4FC7-8C37-9EFA95D3C750"


export const apiCall = axios.create({
    baseURL: BASE_URL_API,
})

export const apiBackend = axios.create({
    baseURL: BASE_URL_BACKEND,
})

export const apiAuth = axios.create({
    baseURL: BASE_URL_AUTH,
    headers: {
        "Content-Type": "application/json"
    }
})