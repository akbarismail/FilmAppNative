/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, fonts } from '../../../utils';

const CardContentDetailMovie = ({ duration, language, rate }) => {
  return (
    <>
      <View style={styles.wrapAboutFilm}>
        <Text style={styles.title}>Durasi</Text>
        <Text style={styles.textDesc}>{duration}</Text>
        <Text style={styles.textDesc}>Minutes</Text>
      </View>
      <View style={styles.wrapAboutFilm}>
        <Text style={styles.title}>Bahasa</Text>
        <Text style={styles.textDesc}>{language}</Text>
      </View>
      <View style={styles.wrapAboutFilm2}>
        <Text style={styles.title}>Rating</Text>
        <Text style={styles.textDesc}>{rate}</Text>
      </View>
    </>
  );
};

export default CardContentDetailMovie;

const styles = StyleSheet.create({
  wrapAboutFilm: {
    paddingHorizontal: 32,
    paddingVertical: 7,
    alignItems: 'center',
    borderRightWidth: 2,
    borderRightColor: colors.border.secondary,
  },
  wrapAboutFilm2: {
    paddingHorizontal: 32,
    paddingVertical: 7,
    alignItems: 'center',
  },
  title: {
    fontSize: 15,
    fontFamily: fonts.primary['400'],
    color: colors.text.disable,
  },
  textDesc: {
    fontSize: 18,
    fontFamily: fonts.primary['400'],
  },
});
