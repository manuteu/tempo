import axios from 'axios';

// https://api.hgbrasil.com/weather?key=8b96954a&lat=-23.682&lon=-46.875

export const key = '8b96954a';

const api = axios.create({
  baseURL: 'https://api.hgbrasil.com',
});

export default api;
