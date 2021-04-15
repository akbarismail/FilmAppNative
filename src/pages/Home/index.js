/* eslint-disable prettier/prettier */
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { colors, fonts } from '../../utils';
import { CardFilm, Gap, Slider } from '../../components';
import {
  IcArrow,
  ImgFilm1,
  ImgFilm2,
  ImgFilm3,
  ImgFilmPopular1,
  ImgFilmPopular2,
  ImgFilmPopular3,
} from '../../assets';

const Home = ({ navigation }) => {
  const images = [
    'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1480&q=80',
    'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
    'https://images.unsplash.com/photo-1505775561242-727b7fba20f0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
  ];

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.wrapSection}>
          <Text style={styles.textContent}>Akan Tayang</Text>
          <Slider images={images} />
        </View>

        <View style={styles.wrapNewsFilm}>
          <Text style={styles.textDesc}>Film Terbaru</Text>
          <TouchableOpacity>
            <IcArrow />
          </TouchableOpacity>
        </View>

        <View style={styles.wrapSection}>
          <View style={styles.wrapScroll}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.newsFilm}>
                <Gap width={20} />
                <CardFilm
                  title="The Outpost"
                  rate={5.4}
                  imgFrom={ImgFilm1}
                  onPress={() => navigation.navigate('DetailMovie')}
                />
                <Gap width={11} />
                <CardFilm
                  title="Desperados"
                  rate={6.7}
                  imgFrom={ImgFilm2}
                  onPress={() => navigation.navigate('DetailMovie')}
                />
                <Gap width={11} />
                <CardFilm
                  title="Eurovision..."
                  rate={6.5}
                  imgFrom={ImgFilm3}
                  onPress={() => navigation.navigate('DetailMovie')}
                />
                <Gap width={11} />
                <CardFilm
                  title="Desperados"
                  rate={6.7}
                  imgFrom={ImgFilm2}
                  onPress={() => navigation.navigate('DetailMovie')}
                />
                <Gap width={11} />
                <CardFilm
                  title="Desperados"
                  rate={6.7}
                  imgFrom={ImgFilm2}
                  onPress={() => navigation.navigate('DetailMovie')}
                />
                <Gap width={20} />
              </View>
            </ScrollView>
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
                <Gap width={20} />
                <CardFilm
                  title="The Outpost"
                  rate={6.1}
                  imgFrom={ImgFilmPopular1}
                  onPress={() => navigation.navigate('DetailMovie')}
                />
                <Gap width={11} />
                <CardFilm
                  title="Desperados"
                  rate={8.7}
                  imgFrom={ImgFilmPopular2}
                  onPress={() => navigation.navigate('DetailMovie')}
                />
                <Gap width={11} />
                <CardFilm
                  title="Eurovision..."
                  rate={7.5}
                  imgFrom={ImgFilmPopular3}
                  onPress={() => navigation.navigate('DetailMovie')}
                />
                <Gap width={11} />
                <CardFilm
                  title="Desperados"
                  rate={5.4}
                  imgFrom={ImgFilm2}
                  onPress={() => navigation.navigate('DetailMovie')}
                />
                <Gap width={11} />
                <CardFilm
                  title="Desperados"
                  rate={5.4}
                  imgFrom={ImgFilm2}
                  onPress={() => navigation.navigate('DetailMovie')}
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
  },
});
