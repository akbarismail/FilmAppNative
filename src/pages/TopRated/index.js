/* eslint-disable prettier/prettier */
import React, { Fragment } from 'react';
import { useEffect } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { CardFilm, Gap } from '../../components';
import { getTopRated } from '../../store/actions/moviesAction';
import { colors } from '../../utils';

const TopRated = ({ navigation, getRated, dataRatedMovie }) => {
  useEffect(() => {
    getRated();
  }, [getRated]);

  const ratedMap = dataRatedMovie?.topRated?.map(popular => {
    const { id, title, vote_average, poster_path, release_date } = popular;
    return (
      <Fragment key={id}>
        <Gap height={27} />
        <CardFilm
          isTopMenu
          title={title}
          year={release_date}
          rate={vote_average}
          desc="Drama, History, Action"
          imgFrom={`https://image.tmdb.org/t/p/original${poster_path}`}
          onPress={() => navigation.navigate('DetailMovie')}
        />
      </Fragment>
    );
  });
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.wrapSection}>
          {dataRatedMovie?.topRated?.length > 0 && ratedMap}
        </View>
        <Gap height={27} />
      </ScrollView>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    dataRatedMovie: state.topRatedMovies,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getRated: () => dispatch(getTopRated()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopRated);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  wrapSection: {
    paddingHorizontal: 20,
  },
});
