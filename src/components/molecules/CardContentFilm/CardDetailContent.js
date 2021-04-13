/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { colors, fonts } from '../../../utils';

const CardDetailContent = ({ imgFrom, title, year }) => {
  return (
    <View style={styles.wrapCover}>
      <Image source={imgFrom} style={styles.coverFilm} />
      <View style={styles.wrapContent}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.wrapYear}>
          <Text style={styles.year}>{year}</Text>
        </View>
        <View style={styles.wrapDesc}>
          <Text style={styles.subTitle}>Animation</Text>
          <Text style={styles.subTitle}>Family</Text>
          <Text style={styles.subTitle}>Adventure</Text>
          <Text style={styles.subTitle}>Comedy</Text>
          <Text style={styles.subTitle}>Fantasy</Text>
        </View>
      </View>
    </View>
  );
};

export default CardDetailContent;

const styles = StyleSheet.create({
  wrapCover: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  coverFilm: {
    marginRight: 6,
  },
  wrapContent: { flex: 1 },
  title: {
    fontSize: 15,
    fontFamily: fonts.primary['600'],
    color: colors.white,
  },
  wrapYear: {
    backgroundColor: colors.border.third,
    paddingHorizontal: 4,
    width: 33,
    borderRadius: 3,
    marginTop: 4,
  },
  year: {
    fontSize: 10,
    fontFamily: fonts.primary['300'],
    textAlign: 'center',
    color: colors.white,
  },
  wrapDesc: { flexDirection: 'row', marginTop: 10 },
  subTitle: {
    fontSize: 10,
    fontFamily: fonts.primary['400'],
    color: colors.white,
    marginRight: 5,
    backgroundColor: colors.border.third,
    paddingHorizontal: 5,
    borderRadius: 3,
  },
});
