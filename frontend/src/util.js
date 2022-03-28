import axios from 'axios';

const baseURL = 'http://localhost:4000';

export const axiosInstace = axios.create({
  baseURL,
  headers: {
    "Content-Type": "multipart/form-data",
  }
});