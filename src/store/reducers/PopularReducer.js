/* eslint-disable prettier/prettier */
import { GET_POPULAR_MOVIE } from '../constant';

const initialState = {
  dataPopular: [],
  loading: false,
};

const PopularReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_POPULAR_MOVIE}_PENDING`:
      return {
        ...state,
        loading: true,
      };
    case `${GET_POPULAR_MOVIE}_FULFILLED`:
      return {
        ...state,
        dataPopular: action.payload,
        loading: false,
      };
    case `${GET_POPULAR_MOVIE}_REJECTED`:
      return {
        ...state,
        dataPopular: [],
        loading: false,
      };

    default:
      return state;
  }
};

export default PopularReducer;
