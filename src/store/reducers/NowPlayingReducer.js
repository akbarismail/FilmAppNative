/* eslint-disable prettier/prettier */
import { GET_NOW_PLAYING } from '../constant';

const initialState = {
  data: [],
  loading: false,
};

const NowPlayingReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_NOW_PLAYING}_PENDING`:
      return {
        ...state,
        loading: true,
      };
    case `${GET_NOW_PLAYING}_FULFILLED`:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case `${GET_NOW_PLAYING}_REJECTED`:
      return {
        ...state,
        data: [],
        loading: false,
      };

    default:
      return state;
  }
};

export default NowPlayingReducer;
