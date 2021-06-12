/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { colors, fonts } from '../../../utils';

const CardDetailContent = ({ imgFrom, title, year, genre }) => {
  const genreMap = genre?.map(item => {
    const { id, name } = item;
    return (
      <Text key={id} style={styles.subTitle}>
        {name}
      </Text>
    );
  });
  return (
    <View style={styles.wrapCover}>
      <Image source={{ uri: imgFrom }} style={styles.coverFilm} />
      <View style={styles.wrapContent}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.wrapYear}>
          <Text style={styles.year}>{year}</Text>
        </View>
        <View style={styles.wrapDesc}>{genre?.length > 0 && genreMap}</View>
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
    width: 90,
    height: 120,
    borderRadius: 5,
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
  wrapDesc: { flexDirection: 'row', marginTop: 5, flexWrap: 'wrap' },
  subTitle: {
    fontSize: 10,
    fontFamily: fonts.primary['400'],
    color: colors.white,
    marginRight: 5,
    marginTop: 5,
    backgroundColor: colors.border.third,
    paddingHorizontal: 5,
    borderRadius: 3,
  },
});
