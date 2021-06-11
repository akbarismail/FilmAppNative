/* eslint-disable prettier/prettier */
import React, { Fragment } from 'react';
import { useEffect } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { CardFilm, Gap } from '../../components';
import { url_img } from '../../config/api';
import { getUpcomingMovies } from '../../store/actions/moviesAction';
import { colors } from '../../utils';

const ComingSoon = ({ navigation, getUpcoming, dataUpcoming }) => {
  useEffect(() => {
    getUpcoming();
  }, [getUpcoming]);

  const popularMap = dataUpcoming?.data?.map(popular => {
    const { id, title, vote_average, poster_path, release_date } = popular;
    return (
      <Fragment key={id}>
        <Gap height={20} />
        <CardFilm
          isTopMenu
          title={title}
          year={release_date}
          rate={vote_average}
          desc="Drama, History, Action"
          imgFrom={url_img + poster_path}
          onPress={() => navigation.navigate('DetailMovie')}
        />
      </Fragment>
    );
  });
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.wrapSection}>
          {dataUpcoming?.data?.length > 0 && popularMap}
        </View>
        <Gap height={25} />
      </ScrollView>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    dataUpcoming: state.upcoming,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUpcoming: () => dispatch(getUpcomingMovies()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ComingSoon);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  wrapSection: {
    paddingHorizontal: 20,
  },
});
