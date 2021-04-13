/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
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
  ImgCoverFilm,
  ImgFilm1,
  ImgFilm2,
  ImgFilm3,
  ImgFilmPopular1,
  ImgFilmPopular2,
  ImgFilmPopular3,
} from '../../assets';

const Home = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.wrapSection}>
          <Header />
          <Navigation />
        </View>

        <View style={styles.wrapSection}>
          <Text style={styles.textContent}>Akan Tayang</Text>
          <View style={styles.wrapperImage}>
            <Image source={ImgBanner} style={styles.imgBanner} />
            <View style={styles.wrapperEclipse}>
              <IcEllipseActive style={styles.ellipse} />
              <IcEllipse style={styles.ellipse} />
              <IcEllipse />
            </View>
            <View>
              <CardContentFilm
                imgFrom={ImgCoverFilm}
                title="Dreambuilders"
                desc="Animation, Adventure, Comedy"
                rate={6.5}
              />
            </View>
          </View>
        </View>

        <View style={styles.wrapNewsFilm}>
          <View>
            <Text style={styles.textDesc}>Film Terbaru</Text>
          </View>
          <TouchableOpacity>
            <IcArrow />
          </TouchableOpacity>
        </View>

        <View style={styles.wrapScroll}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.newsFilm}>
              <CardFilm title="The Outpost" rate={5.4} imgFrom={ImgFilm1} />
              <Gap width={11} />
              <CardFilm title="Desperados" rate={6.7} imgFrom={ImgFilm2} />
              <Gap width={11} />
              <CardFilm title="Eurovision..." rate={6.5} imgFrom={ImgFilm3} />
              <Gap width={11} />
              <CardFilm title="Desperados" rate={6.7} imgFrom={ImgFilm2} />
              <Gap width={20} />
            </View>
          </ScrollView>
        </View>

        <View style={styles.wrapNewsFilm}>
          <View>
            <Text style={styles.textDesc}>Film Terpopuler</Text>
          </View>
          <TouchableOpacity>
            <IcArrow />
          </TouchableOpacity>
        </View>

        <View style={styles.wrapScroll}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.newsFilm}>
              <CardFilm
                title="The Outpost"
                rate={6.1}
                imgFrom={ImgFilmPopular1}
              />
              <Gap width={11} />
              <CardFilm
                title="Desperados"
                rate={8.7}
                imgFrom={ImgFilmPopular2}
              />
              <Gap width={11} />
              <CardFilm
                title="Eurovision..."
                rate={7.5}
                imgFrom={ImgFilmPopular3}
              />
              <Gap width={11} />
              <CardFilm title="Desperados" rate={5.4} imgFrom={ImgFilm2} />
              <Gap width={20} />
            </View>
          </ScrollView>
        </View>
        <Gap height={30} />
      </ScrollView>
    </View>
  );
};

export default Home;

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
    paddingHorizontal: 20,
  },
  textDesc: {
    marginTop: 15,
    color: colors.black,
    fontFamily: fonts.primary['400'],
    fontSize: 15,
  },
  wrapScroll: {
    paddingHorizontal: 20,
  },
  newsFilm: {
    flexDirection: 'row',
  },
});
