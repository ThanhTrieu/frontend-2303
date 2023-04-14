import axios from 'axios';

const getAllDataProducts = () => {
    const urlApi = `https://dummyjson.com/products`;
    return axios.get(urlApi); // return ve 1 promise
}

const getDataProductById = (id) => {
    const urlApi = `https://dummyjson.com/products/${id}`;
    return axios.get(urlApi); // return ve 1 promise
}

const getDataPostById = async (id) => {
    const url = `https://dummyjson.com/posts/${id}`;
    const response = await axios.get(url);
    return await response.status === 200 ? await response.data: {};
}

const getDataCommentsByPostId = async (id) => {
    const url = `https://dummyjson.com/posts/${id}/comments`;
    const response = await axios.get(url);
    return await response.status === 200 ? await response.data: [];
}

export const api = {
    getAllDataProducts,
    getDataProductById,
    getDataPostById,
    getDataCommentsByPostId
}