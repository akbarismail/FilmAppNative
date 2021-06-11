/* eslint-disable prettier/prettier */
import { API, api_key } from '../../config/api';
import { GET_POPULAR_MOVIE, GET_RATE_MOVIE, GET_UPCOMING } from '../constant';

export const getTopRated = () => {
  return {
    type: GET_RATE_MOVIE,
    payload: async () => {
      const res = await API.get(`top_rated?api_key=${api_key}`).catch(err =>
        Promise.reject(err),
      );
      return res.data.results;
    },
  };
};

export const getPopularMovies = () => {
  return {
    type: GET_POPULAR_MOVIE,
    payload: async () => {
      const res = await API.get(`popular?api_key=${api_key}`).catch(err =>
        Promise.reject(err),
      );
      return res.data.results;
    },
  };
};

export const getUpcomingMovies = () => {
  return {
    type: GET_UPCOMING,
    payload: async () => {
      const res = await API.get(`upcoming?api_key=${api_key}`).catch(err =>
        Promise.reject(err),
      );
      return res.data.results;
    },
  };
};
