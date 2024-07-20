//Api Config
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api-users-navy.vercel.app/'
});

export default api;