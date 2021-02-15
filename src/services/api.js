import axios from 'axios';

const email = 'email@teste.com';

export const api = axios.create({
  baseURL: 'https://flukenator.herokuapp.com/',
  headers: {Authorization: email},
});
