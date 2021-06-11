/* eslint-disable prettier/prettier */
import { GET_UPCOMING } from '../constant';

const initialState = {
  data: [],
  loading: false,
};

const UpcomingReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_UPCOMING}_PENDING`:
      return {
        ...state,
        loading: true,
      };
    case `${GET_UPCOMING}_FULFILLED`:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case `${GET_UPCOMING}_REJECTED`:
      return {
        ...state,
        data: [],
        loading: false,
      };

    default:
      return state;
  }
};

export default UpcomingReducer;
