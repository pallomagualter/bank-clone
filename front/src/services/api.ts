import axios from "axios";

const api = axios.create({
  baseURL: `http://localhost:5173`,
})

api.interceptors.request.use(config => {
  const token = localStorage.getItem('@GualterBank') || '';
  config.headers = {
    'Authorization': `Bearer ${token}`,
  }

  return config;
})

export default api;