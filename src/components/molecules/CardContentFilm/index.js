/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { IcStar, ImgCoverFilm } from '../../../assets';
import { colors, fonts } from '../../../utils';

const CardContentFilm = () => {
  return (
    <View style={styles.wrapCover}>
      <Image source={ImgCoverFilm} style={styles.coverFilm} />
      <View>
        <Text style={styles.title}>Dreambuilders</Text>
        <Text style={styles.subTitle}>Animation, Adventure, Comedy</Text>
        <View style={styles.wrapperStar}>
          <View style={styles.star}>
            <IcStar />
          </View>
          <Text style={styles.textRate}>6.5</Text>
        </View>
      </View>
    </View>
  );
};

export default CardContentFilm;

const styles = StyleSheet.create({
  wrapCover: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 14,
    left: 13,
  },
  coverFilm: {
    marginRight: 6,
  },
  title: {
    fontSize: 15,
    fontFamily: fonts.primary['400'],
    color: colors.white,
  },
  subTitle: {
    fontSize: 7,
    fontFamily: fonts.primary['400'],
    color: colors.white,
  },
  wrapperStar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  star: { marginRight: 4 },
  textRate: {
    fontSize: 7,
    fontFamily: fonts.primary['400'],
    color: colors.white,
  },
});
