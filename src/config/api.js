/* eslint-disable prettier/prettier */
import axios from 'axios';

export const api_key = '85582ac3455b2a5477ea7011a4c64a39';
export const url_img = 'https://image.tmdb.org/t/p/original';

export const URL = 'https://api.themoviedb.org/3/movie/';
export const API = axios.create({
  baseURL: `${URL}`,
});

API.interceptors.response.use(response => response);
