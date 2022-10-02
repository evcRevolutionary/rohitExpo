import axios from 'axios';

const ApiManger = axios.create({
    baseURL: 'https://api-plugit.herokuapp.com',
    responseType: 'json',
    withCredentials: true,
})

export default ApiManger;