/* eslint-disable prettier/prettier */
import { API, api_key } from '../../config/api';
import {
  GET_CREDIT,
  GET_DETAIL_MOVIE,
  GET_NOW_PLAYING,
  GET_POPULAR_MOVIE,
  GET_RATE_MOVIE,
  GET_RECOMMENDATION,
  GET_UPCOMING,
} from '../constant';

export const getTopRated = () => {
  return {
    type: GET_RATE_MOVIE,
    payload: async () => {
      const res = await API.get(`top_rated?api_key=${api_key}`).catch(err => {
        return Promise.reject(err);
      });
      return res.data.results;
    },
  };
};

export const getPopularMovies = () => {
  return {
    type: GET_POPULAR_MOVIE,
    payload: async () => {
      const res = await API.get(`popular?api_key=${api_key}`).catch(err => {
        return Promise.reject(err);
      });
      return res.data.results;
    },
  };
};

export const getUpcomingMovies = () => {
  return {
    type: GET_UPCOMING,
    payload: async () => {
      const res = await API.get(`upcoming?api_key=${api_key}`).catch(err => {
        return Promise.reject(err);
      });
      return res.data.results;
    },
  };
};

export const getNowPlaying = () => {
  return {
    type: GET_NOW_PLAYING,
    payload: async () => {
      const res = await API.get(`now_playing?api_key=${api_key}`).catch(err => {
        return Promise.reject(err);
      });
      return res.data.results;
    },
  };
};

export const getDetailMovie = id => {
  return {
    type: GET_DETAIL_MOVIE,
    payload: async () => {
      const res = await API.get(`${id}?api_key=${api_key}`).catch(err => {
        return Promise.reject(err);
      });
      return res.data;
    },
  };
};

export const getCredits = id => {
  return {
    type: GET_CREDIT,
    payload: async () => {
      const res = await API.get(`${id}/credits?api_key=${api_key}`).catch(
        err => {
          return Promise.reject(err);
        },
      );
      return res.data.cast;
    },
  };
};

export const getRecommendation = id => {
  return {
    type: GET_RECOMMENDATION,
    payload: async () => {
      const res = await API.get(
        `${id}/recommendations?api_key=${api_key}`,
      ).catch(err => {
        return Promise.reject(err);
      });
      return res.data.results;
    },
  };
};
