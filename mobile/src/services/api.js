import axios from 'axios';

//Acesso ao backend
const api = axios.create({
  //ip deve ser alterado de acordo com o expo
  baseURL: 'http://192.168.43.167:3333',
});

export default api;
