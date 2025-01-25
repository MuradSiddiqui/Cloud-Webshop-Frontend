export const getProducts = async() =>{
    const res = await fetch("http://127.0.0.1:8000/api/products");
    const data = await res.json();
    return data
}
export const getProductById = async(id: string) =>{
    const res = await fetch("http://127.0.0.1:8000/api/products/"+id);
    const data = await res.json();
    return data
}
export const getProductsByParams = async(params: string) =>{
    const res = await fetch("http://127.0.0.1:8000/api/products/?"+params);
    const data = await res.json();
    return data
}

export const getCategories = async() =>{
    const res = await fetch("http://127.0.0.1:8000/api/categories");
    const data = await res.json();
    return data
}