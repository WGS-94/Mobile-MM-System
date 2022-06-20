import axios from 'axios';

const api = axios.create({
  //baseURL: process.env.REACT_APP_API_URL,
  baseURL: 'http://192.168.0.11:3333',
});

//export const frontURL = process.env.REACT_APP_FRONT_URL;

export default api;