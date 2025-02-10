import { IOrder } from "./types";

const BASE_URL = "https://a7f6x2hcc5.execute-api.eu-central-1.amazonaws.com/dev/api";

export const apiCall = async (url: string, method: string, body?: any) => {
    const res = await fetch(`${BASE_URL}${url}`, {
        method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body),
        cache: 'no-store'
    });
    if (!res.ok) {
        throw new Error(`Api call failed with status ${res.status}`);
    }
    return res.json();
}

export const getProducts = async () => {
    return await apiCall('/products', 'GET');
}

export const getProductById = async (id: string) => {
    return await apiCall(`/products/${id}`, 'GET');
}

export const getProductsByParams = async (params: string) => {
    return await apiCall(`/products/?${params}`, 'GET');
}

export const getCategories = async () => {
    return await apiCall('/categories', 'GET');
}

export const fetchOrderById = async (id: string): Promise<IOrder> => {
    const data = await apiCall(`/orders/${id}`, 'GET') as IOrder;
    return data
}