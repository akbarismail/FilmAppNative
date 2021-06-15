/* eslint-disable prettier/prettier */
import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { colors, fonts } from '../../utils';
import { CardFilm, Gap, Slider } from '../../components';
import { IcArrow } from '../../assets';
import {
  getTopRated,
  getPopularMovies,
  getUpcomingMovies,
  getNowPlaying,
} from '../../store/actions/moviesAction';
import { url_img } from '../../config/api';

const Home = ({
  navigation,
  getRated,
  getPopular,
  getUpcoming,
  getPlaying,
  dataRatedMovie,
  dataPopularMovie,
  dataUpcoming,
  dataPlaying,
}) => {
  useEffect(() => {
    getRated();
    getPopular();
    getUpcoming();
    getPlaying();
  }, [getRated, getPopular, getUpcoming, getPlaying]);

  const popularMap = dataPopularMovie?.dataPopular?.slice(0, 7).map(popular => {
    const { id, title, vote_average, poster_path } = popular;
    return (
      <Fragment key={id}>
        <Gap width={20} />
        <CardFilm
          title={title}
          rate={vote_average}
          imgFrom={url_img + poster_path}
          onPress={() => navigation.navigate('DetailMovie', { id: id })}
        />
      </Fragment>
    );
  });

  const upcomingMap = dataUpcoming?.data?.slice(7, 14).map(upcoming => {
    const { id, title, poster_path, vote_average } = upcoming;
    return (
      <Fragment key={id}>
        <Gap width={20} />
        <CardFilm
          title={title}
          rate={vote_average}
          imgFrom={url_img + poster_path}
          onPress={() => navigation.navigate('DetailMovie', { id: id })}
        />
      </Fragment>
    );
  });

  const nowPlayingMap = dataPlaying?.data
    ?.slice(13, 19)
    .map(playing => <Slider key={playing.id} playing={playing} />);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.wrapSection}>
          <Text style={styles.textContent}>Tayang Saat Ini</Text>
          <View style={styles.newsFilm}>
            {dataPlaying?.data?.length > 0 && nowPlayingMap}
          </View>
        </View>

        <View style={styles.wrapNewsFilm}>
          <View>
            <Text style={styles.textDesc}>Film Terpopuler</Text>
          </View>
          <TouchableOpacity>
            <IcArrow />
          </TouchableOpacity>
        </View>

        <View style={styles.wrapSection}>
          <View style={styles.wrapScroll}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.newsFilm}>
                {dataPopularMovie?.dataPopular?.length > 0 && popularMap}
              </View>
            </ScrollView>
          </View>
        </View>

        <View style={styles.wrapNewsFilm}>
          <Text style={styles.textDesc}>Film Akan Datang</Text>
          <TouchableOpacity>
            <IcArrow />
          </TouchableOpacity>
        </View>

        <View style={styles.wrapSection}>
          <View style={styles.wrapScroll}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.newsFilm}>
                {dataUpcoming?.data?.length > 0 && upcomingMap}
              </View>
            </ScrollView>
          </View>
        </View>
        <Gap height={24} />
      </ScrollView>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    dataRatedMovie: state.topRatedMovies,
    dataPopularMovie: state.popular,
    dataUpcoming: state.upcoming,
    dataPlaying: state.nowPlaying,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getRated: () => dispatch(getTopRated()),
    getPopular: () => dispatch(getPopularMovies()),
    getUpcoming: () => dispatch(getUpcomingMovies()),
    getPlaying: () => dispatch(getNowPlaying()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
  container: { backgroundColor: colors.white, flex: 1 },
  wrapSection: {
    paddingHorizontal: 20,
  },
  textContent: {
    marginTop: 20,
    fontSize: 15,
    fontFamily: fonts.primary['400'],
  },
  wrapNewsFilm: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  textDesc: {
    marginTop: 15,
    color: colors.black,
    fontFamily: fonts.primary['400'],
    fontSize: 15,
  },
  wrapScroll: {
    marginHorizontal: -20,
  },
  newsFilm: {
    flexDirection: 'row',
    marginTop: 10,
    paddingRight: 20,
  },
});
