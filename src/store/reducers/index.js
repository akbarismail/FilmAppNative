/* eslint-disable prettier/prettier */
import PopularReducer from './PopularReducer';
import TopRatedReducer from './TopRatedReducer';
import UpcomingReducer from './UpcomingReducer';

export default {
  topRatedMovies: TopRatedReducer,
  popular: PopularReducer,
  upcoming: UpcomingReducer,
};
