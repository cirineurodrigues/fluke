import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://flukenator.herokuapp.com/',
});
