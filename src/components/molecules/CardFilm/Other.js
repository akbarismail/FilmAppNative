/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IcStar } from '../../../assets';
import { fonts } from '../../../utils';

const Other = ({ imgFrom, title, rate, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={imgFrom} />
      <Text style={styles.titleFilm}>{title}</Text>
      <View style={styles.wrapContentText}>
        <IcStar />
        <Text style={styles.starText}>{rate}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Other;

const styles = StyleSheet.create({
  titleFilm: {
    fontSize: 12,
    fontFamily: fonts.primary['400'],
    marginTop: 2,
  },
  wrapContentText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  starText: {
    marginLeft: 4,
    fontSize: 7,
  },
});
