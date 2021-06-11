/* eslint-disable prettier/prettier */
import DetailMovieReducer from './DetailMovieReducer';
import NowPlayingReducer from './NowPlayingReducer';
import PopularReducer from './PopularReducer';
import TopRatedReducer from './TopRatedReducer';
import UpcomingReducer from './UpcomingReducer';

export default {
  topRatedMovies: TopRatedReducer,
  popular: PopularReducer,
  upcoming: UpcomingReducer,
  nowPlaying: NowPlayingReducer,
  detailMovie: DetailMovieReducer,
};
