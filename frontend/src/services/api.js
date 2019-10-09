//framework facilitador para gerenciamento de protocolos http
import axios from 'axios';

//variável que carregará baseURL para conexões http
const api = axios.create({
    baseURL: 'http://localhost:3333',
});

export default api;