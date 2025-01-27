export const getProducts = async () => {
    const res = await fetch("https://a7f6x2hcc5.execute-api.eu-central-1.amazonaws.com/dev/api" + "/products", { cache: 'no-store' });
    const data = await res.json();
    return data
}
export const getProductById = async (id: string) => {
    const res = await fetch("https://a7f6x2hcc5.execute-api.eu-central-1.amazonaws.com/dev/api" + "/products/" + id, { cache: 'no-store' });
    const data = await res.json();
    return data
}
export const getProductsByParams = async (params: string) => {
    const res = await fetch("https://a7f6x2hcc5.execute-api.eu-central-1.amazonaws.com/dev/api" + "/products/?" + params, { cache: 'no-store' });
    const data = await res.json();
    return data
}

export const getCategories = async () => {
    const res = await fetch("https://a7f6x2hcc5.execute-api.eu-central-1.amazonaws.com/dev/api" + "/categories", { cache: 'no-store' });
    const data = await res.json();
    return data
}