/* eslint-disable prettier/prettier */
import { GET_RATE_MOVIE } from '../constant';

const initialState = {
  topRated: [],
  loading: false,
};

const TopRatedReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_RATE_MOVIE}_PENDING`:
      return {
        ...state,
        loading: true,
      };
    case `${GET_RATE_MOVIE}_FULFILLED`:
      return {
        ...state,
        topRated: action.payload,
        loading: false,
      };
    case `${GET_RATE_MOVIE}_REJECTED`:
      return {
        ...state,
        topRated: [],
        loading: false,
      };
    default:
      return state;
  }
};

export default TopRatedReducer;
