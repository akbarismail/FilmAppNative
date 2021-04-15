/* eslint-disable prettier/prettier */
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import {
  ImgFilm1,
  ImgFilm2,
  ImgFilmPopular1,
  ImgFilmPopular2,
  ImgFilmPopular3,
} from '../../assets';
import { CardFilm, Gap } from '../../components';
import { colors } from '../../utils';

const TopMenu = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.wrapSection}>
          <Gap height={27} />
          <CardFilm
            isTopMenu
            imgFrom={ImgFilmPopular1}
            title="The Outpost"
            year={2020}
            desc="Drama, History, Action"
            rate={5.4}
            onPress={() => navigation.navigate('DetailMovie')}
          />
          <Gap height={8} />
          <CardFilm
            isTopMenu
            imgFrom={ImgFilmPopular2}
            title="Desperados"
            year={2020}
            desc="Comedy, Romance"
            rate={6.7}
            onPress={() => navigation.navigate('DetailMovie')}
          />
          <Gap height={8} />
          <CardFilm
            isTopMenu
            imgFrom={ImgFilmPopular3}
            title="Eurovision Song Contest: The..."
            year={2020}
            desc="Comedy, Music"
            rate={6.5}
            onPress={() => navigation.navigate('DetailMovie')}
          />
          <Gap height={8} />
          <CardFilm
            isTopMenu
            imgFrom={ImgFilm1}
            title="Artemis Fowl"
            year={2020}
            desc="Adventure, Fantasy, Science Fiction, Family"
            rate={5.9}
            onPress={() => navigation.navigate('DetailMovie')}
          />
          <Gap height={8} />
          <CardFilm
            isTopMenu
            imgFrom={ImgFilm2}
            title="Force of Nature"
            year={2020}
            desc="Action, Drama"
            rate={5.4}
            onPress={() => navigation.navigate('DetailMovie')}
          />
        </View>
        <Gap height={30} />
      </ScrollView>
    </View>
  );
};

export default TopMenu;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  wrapSection: {
    paddingHorizontal: 20,
  },
});
