import axios from 'axios';

const instance = axios.create({
    baseURL : 'http://localhost:3000',
}) // instance 끝

function fetchProductById(id) {

    return instance.get(`/products/${id}`);

} // fetchProductById() 끝

function fetchProductsBykeyword(keyword) {
    return instance.get(`/products`, {
        params: {
            name_like : keyword,
        },
    })
} // fetchProductsBykeyword() 끝

export { fetchProductById, fetchProductsBykeyword }
