import axios from 'axios';

const api = axios.create({
  baseURL: 'https://safe-chamber-80678.herokuapp.com',
});

export default api;
