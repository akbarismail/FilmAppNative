/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { colors, fonts } from '../../utils';
import {
  CardContentFilm,
  CardFilm,
  Gap,
  Header,
  Navigation,
} from '../../components';
import {
  IcArrow,
  IcEllipse,
  IcEllipseActive,
  ImgBanner,
  ImgFilm1,
  ImgFilm2,
  ImgFilm3,
  ImgFilmPopular1,
  ImgFilmPopular2,
  ImgFilmPopular3,
} from '../../assets';

const Home = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Header />
        <Navigation />
        <View style={styles.content}>
          <Text style={styles.textContent}>Akan Tayang</Text>
        </View>

        <View style={styles.wrapperImage}>
          <Image source={ImgBanner} style={styles.imgBanner} />
          <View style={styles.wrapperEclipse}>
            <IcEllipseActive style={styles.ellipse} />
            <IcEllipse style={styles.ellipse} />
            <IcEllipse />
          </View>
          <View>
            <CardContentFilm />
          </View>
        </View>

        <View style={styles.wrapNewsFilm}>
          <View>
            <Text style={styles.textDesc}>Film Terbaru</Text>
          </View>
          <IcArrow />
        </View>

        <View style={styles.wrapCardFilm}>
          <CardFilm text="The Outpost" rate={5.4} imgFrom={ImgFilm1} />
          <Gap width={11} />
          <CardFilm text="Desperados" rate={6.7} imgFrom={ImgFilm2} />
          <Gap width={11} />
          <CardFilm text="Eurovision Song..." rate={6.5} imgFrom={ImgFilm3} />
          <Gap width={11} />
          <CardFilm text="Desperados" rate={6.7} imgFrom={ImgFilm2} />
        </View>

        <View style={styles.wrapNewsFilm}>
          <View>
            <Text style={styles.textDesc}>Film Terpopuler</Text>
          </View>
          <IcArrow />
        </View>

        <View style={styles.wrapCardFilm}>
          <CardFilm text="The Outpost" rate={6.1} imgFrom={ImgFilmPopular1} />
          <Gap width={11} />
          <CardFilm text="Desperados" rate={8.7} imgFrom={ImgFilmPopular2} />
          <Gap width={11} />
          <CardFilm
            text="Eurovision Song..."
            rate={7.5}
            imgFrom={ImgFilmPopular3}
          />
          <Gap width={11} />
          <CardFilm text="Desperados" rate={5.4} imgFrom={ImgFilm2} />
        </View>
        <Gap height={20} />
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: { backgroundColor: colors.white, flex: 1, paddingHorizontal: 20 },
  content: {
    marginTop: 20,
  },
  textContent: {
    fontSize: 15,
    fontFamily: fonts.primary['400'],
  },
  wrapperImage: {
    justifyContent: 'center',
  },
  imgBanner: {
    marginTop: 10,
  },
  wrapperEclipse: {
    flexDirection: 'row',
    marginTop: 5,
    justifyContent: 'center',
  },
  ellipse: {
    marginRight: 10,
  },
  wrapNewsFilm: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textDesc: {
    marginTop: 15,
    color: colors.black,
    fontFamily: fonts.primary['400'],
    fontSize: 15,
  },
  wrapCardFilm: {
    flexDirection: 'row',
  },
});
