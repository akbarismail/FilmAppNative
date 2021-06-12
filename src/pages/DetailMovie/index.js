/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  CardContentDetailMovie,
  CardContentFilm,
  CardFilm,
  CardProfileActor,
  Gap,
  Header,
} from '../../components';
import { colors, fonts } from '../../utils';
import { connect } from 'react-redux';
import {
  getCredits,
  getDetailMovie,
  getRecommendation,
} from '../../store/actions/moviesAction';
import { url_img } from '../../config/api';
import { Fragment } from 'react';

const DetailMovie = ({
  navigation,
  route,
  detailMovie,
  getDetail,
  getCreditMovie,
  getRecommend,
}) => {
  useEffect(() => {
    getDetail(route.params?.id);
    getCreditMovie(route.params?.id);
    getRecommend(route.params?.id);
  }, [getDetail, route, getCreditMovie, getRecommend]);

  console.log('detailMovie', detailMovie?.data);

  const creditMap = detailMovie?.dataCredit?.map(credit => {
    const { id, character, profile_path, original_name } = credit;
    return (
      <CardProfileActor
        key={id}
        imgFrom={url_img + profile_path}
        nameActor={original_name}
        aboutActor={character}
      />
    );
  });

  const recommendMap = detailMovie?.dataRecommend?.slice(0, 9).map(item => {
    const { id, poster_path, title, vote_average } = item;
    return (
      <Fragment key={id}>
        <CardFilm
          imgFrom={url_img + poster_path}
          title={title}
          rate={vote_average}
        />
        <Gap width={11} />
      </Fragment>
    );
  });

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {detailMovie?.data && (
          <>
            <ImageBackground
              source={{ uri: url_img + detailMovie?.data?.backdrop_path }}
              style={styles.background}>
              <View style={styles.wrapSection}>
                <Header
                  isDetailMovie
                  onPress={() => navigation.navigate('Home')}
                />
              </View>
              <View style={styles.wrapSection}>
                <Gap height={85} />
                <CardContentFilm
                  isDetailContent
                  imgFrom={url_img + detailMovie?.data?.poster_path}
                  title={detailMovie?.data?.title}
                  year={detailMovie?.data?.release_date.substr(0, 4)}
                  genre={detailMovie?.data?.genres}
                />
              </View>
            </ImageBackground>

            <View style={styles.wrapContentAbout}>
              <CardContentDetailMovie
                duration={detailMovie?.data?.runtime}
                language={detailMovie?.data?.spoken_languages[0]?.english_name}
                rate={detailMovie?.data?.vote_average}
              />
            </View>

            <View style={styles.wrapSection}>
              <Text style={styles.textTitle}>Sinopsis</Text>
              <Text style={styles.descSinopsis}>
                {detailMovie?.data?.overview}
              </Text>
            </View>
          </>
        )}

        <View style={styles.wrapSection}>
          <Text style={styles.textTitle}>Aktor</Text>
          <View style={styles.wrapScroll}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.wrapSectionCard}>
                <Gap width={20} />
                {detailMovie?.dataCredit?.length > 0 && creditMap}
                <Gap width={9} />
              </View>
            </ScrollView>
          </View>
        </View>

        <View style={styles.wrapSection}>
          <Text style={styles.textTitle}>Rekomendasi Film</Text>
          <View style={styles.wrapScroll}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.wrapSectionCard}>
                <Gap width={20} />
                {detailMovie?.dataRecommend?.length > 0 && recommendMap}
                <Gap width={20} />
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
    detailMovie: state.detailMovie,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getDetail: id => dispatch(getDetailMovie(id)),
    getCreditMovie: id => dispatch(getCredits(id)),
    getRecommend: id => dispatch(getRecommendation(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailMovie);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.white },
  background: { height: 303 },
  wrapSection: { paddingHorizontal: 20 },
  wrapContentAbout: {
    flexDirection: 'row',
    marginTop: 27,
    paddingHorizontal: 20,
  },
  textTitle: {
    fontSize: 15,
    fontFamily: fonts.primary['600'],
    marginTop: 15,
  },
  descSinopsis: {
    marginTop: 8,
    fontSize: 12,
    fontFamily: fonts.primary['400'],
    minWidth: 335,
  },
  wrapScroll: {
    justifyContent: 'center',
    marginHorizontal: -20,
  },
  wrapSectionCard: {
    marginTop: 10,
    flexDirection: 'row',
  },
});
