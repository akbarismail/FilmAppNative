/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { IcStar } from '../../../assets';
import { colors, fonts } from '../../../utils';

const NoneCardDetailContent = ({ imgFrom, title, desc, rate }) => {
  return (
    <View style={styles.wrapCover}>
      <Image source={imgFrom} style={styles.coverFilm} />
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{desc}</Text>
        <View style={styles.wrapperStar}>
          <View style={styles.star}>
            <IcStar />
          </View>
          <Text style={styles.textRate}>{rate}</Text>
        </View>
      </View>
    </View>
  );
};

export default NoneCardDetailContent;

const styles = StyleSheet.create({
  wrapCover: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 14,
    left: 13,
  },
  coverFilm: {
    marginRight: 8,
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
