/* eslint-disable prettier/prettier */
import React, { Fragment } from 'react';
import { useEffect } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { CardFilm, Gap } from '../../components';
import { url_img } from '../../config/api';
import { getPopularMovies } from '../../store/actions/moviesAction';
import { colors } from '../../utils';

const Popular = ({ navigation, getPopular, dataPopularMovie }) => {
  useEffect(() => {
    getPopular();
  }, [getPopular]);

  const popularMap = dataPopularMovie?.dataPopular?.map(popular => {
    const { id, title, vote_average, poster_path, release_date } = popular;
    return (
      <Fragment key={id}>
        <Gap height={20} />
        <CardFilm
          isTopMenu
          title={title}
          year={release_date.substr(0, 4)}
          rate={vote_average}
          desc="Drama, History, Action"
          imgFrom={url_img + poster_path}
          onPress={() => navigation.navigate('DetailMovie', { id: id })}
        />
      </Fragment>
    );
  });
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.wrapSection}>
          {dataPopularMovie?.dataPopular?.length > 0 && popularMap}
        </View>
        <Gap height={25} />
      </ScrollView>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    dataPopularMovie: state.popular,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPopular: () => dispatch(getPopularMovies()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Popular);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  wrapSection: {
    paddingHorizontal: 20,
  },
});
