import axios from 'axios';

const api = axios.create({
    baseURL: 'https://reactnotes-backend.herokuapp.com/',
});

export default api;