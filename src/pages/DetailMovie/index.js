/* eslint-disable prettier/prettier */
import React from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  ImgActor2,
  ImgActor3,
  ImgBannerDetail,
  ImgCoverDetail,
  ImgFilm1,
  ImgFilm2,
  ImgFilm3,
  ImgFilmPopular1,
} from '../../assets';
import {
  CardContentDetailMovie,
  CardContentFilm,
  CardFilm,
  CardProfileActor,
  Gap,
  Header,
} from '../../components';
import { colors, fonts } from '../../utils';
import { ImgActor1 } from '../../assets';

const DetailMovie = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground source={ImgBannerDetail} style={styles.background}>
          <View style={styles.wrapSection}>
            <Header isDetailMovie onPress={() => navigation.navigate('Home')} />
          </View>
          <View style={styles.wrapSection}>
            <Gap height={85} />
            <CardContentFilm
              isDetailContent
              imgFrom={ImgCoverDetail}
              title="Onward"
              year={2020}
            />
          </View>
        </ImageBackground>

        <View style={styles.wrapContentAbout}>
          <CardContentDetailMovie
            duration="1h 42m"
            language="Inggris"
            rate={7.9}
          />
        </View>

        <View style={styles.wrapSection}>
          <Text style={styles.textTitle}>Sinopsis</Text>
          <Text style={styles.descSinopsis}>
            In a suburban fantasy world, two teenage elf brothers embark on an
            extraordinary quest to discover if there is still a little magic
            left out there.
          </Text>
        </View>

        <View style={styles.wrapSection}>
          <Text style={styles.textTitle}>Aktor</Text>
          <View style={styles.wrapScroll}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.wrapSectionCard}>
                <Gap width={20} />
                <CardProfileActor
                  imgFrom={ImgActor1}
                  nameActor="Tom Halland"
                  aboutActor="Ian Lightfoot (voice)"
                />
                <CardProfileActor
                  imgFrom={ImgActor2}
                  nameActor="Chris Pratt"
                  aboutActor="Ian Lightfoot (voice)"
                />
                <CardProfileActor
                  imgFrom={ImgActor3}
                  nameActor="Julia Louis D"
                  aboutActor="Ian Lightfoot (voice)"
                />
                <CardProfileActor
                  imgFrom={ImgActor3}
                  nameActor="Julia Louis D"
                  aboutActor="Ian Lightfoot (voice)"
                />
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
                <CardFilm imgFrom={ImgFilm1} title="Ad Astro" rate={6.3} />
                <Gap width={11} />
                <CardFilm imgFrom={ImgFilm2} title="Hamilton" rate={6.7} />
                <Gap width={11} />
                <CardFilm imgFrom={ImgFilm3} title="Journey 2" rate={8.9} />
                <Gap width={11} />
                <CardFilm
                  imgFrom={ImgFilmPopular1}
                  title="The Outpost"
                  rate={5.4}
                />
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

export default DetailMovie;

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
