/* eslint-disable prettier/prettier */
import { GET_DETAIL_MOVIE, GET_CREDIT, GET_RECOMMENDATION } from '../constant';

const initialState = {
  detail: null,
  dataCredit: [],
  dataRecommend: [],
  loading: false,
};

const DetailMovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_DETAIL_MOVIE}_PENDING`:
      return {
        ...state,
        loading: true,
      };
    case `${GET_DETAIL_MOVIE}_FULFILLED`:
      return {
        ...state,
        detail: action.payload,
        loading: false,
      };
    case `${GET_DETAIL_MOVIE}_REJECTED`:
      return {
        ...state,
        detail: {},
        loading: false,
      };
    case `${GET_CREDIT}_PENDING`:
      return {
        ...state,
        loading: true,
      };
    case `${GET_CREDIT}_FULFILLED`:
      return {
        ...state,
        dataCredit: action.payload,
        loading: false,
      };
    case `${GET_CREDIT}_REJECTED`:
      return {
        ...state,
        dataCredit: [],
        loading: false,
      };
    case `${GET_RECOMMENDATION}_PENDING`:
      return {
        ...state,
        loading: true,
      };
    case `${GET_RECOMMENDATION}_FULFILLED`:
      return {
        ...state,
        dataRecommend: action.payload,
        loading: false,
      };
    case `${GET_RECOMMENDATION}_REJECTED`:
      return {
        ...state,
        dataRecommend: [],
        loading: false,
      };

    default:
      return state;
  }
};

export default DetailMovieReducer;
