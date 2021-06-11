/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors, fonts } from '../../../utils';

const CardTopMenu = ({ imgFrom, title, year, desc, rate, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.wrapContent}>
        <Image source={{ uri: imgFrom }} style={styles.imgContent} />
        <View style={styles.wrapAlign}>
          <View>
            <Text style={styles.titleFilm}>{title}</Text>
            <Text style={styles.subTitle}>{year}</Text>
            <Text style={styles.subTitle}>{desc}</Text>
          </View>
          <View style={styles.wrapText}>
            <Text style={styles.textRate}>{rate}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardTopMenu;

const styles = StyleSheet.create({
  wrapContent: { flexDirection: 'row', alignItems: 'center' },
  imgContent: { marginRight: 10, width: 90, height: 120 },
  wrapAlign: { flex: 1, justifyContent: 'space-between' },
  titleFilm: {
    fontSize: 15,
    fontFamily: fonts.primary['600'],
    color: colors.black,
    marginTop: 2,
    width: 200,
  },
  subTitle: {
    fontSize: 10,
    fontFamily: fonts.primary['400'],
  },
  wrapText: {
    marginTop: 15,
    paddingHorizontal: 7,
    paddingVertical: 1,
    backgroundColor: colors.wrapRate.primary,
    maxWidth: 30,
    borderRadius: 3,
  },
  textRate: {
    fontSize: 10,
    fontFamily: fonts.primary['400'],
  },
});
