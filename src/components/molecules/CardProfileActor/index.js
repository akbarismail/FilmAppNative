/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { colors, fonts } from '../../../utils';

const CardProfileActor = ({ imgFrom, nameActor, aboutActor }) => {
  return (
    <View style={styles.wrapActor}>
      <Image source={imgFrom} style={styles.actorImg} />
      <View style={styles.wrapAboutActor}>
        <Text style={styles.nameActor}>{nameActor}</Text>
      </View>
      <Text style={styles.aboutActor}>{aboutActor}</Text>
    </View>
  );
};

export default CardProfileActor;

const styles = StyleSheet.create({
  wrapActor: {
    alignItems: 'center',
    marginRight: 9,
  },
  actorImg: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
  },
  wrapAboutActor: { maxWidth: 98 },
  nameActor: {
    fontSize: 15,
    fontFamily: fonts.primary['400'],
    marginTop: 2,
  },
  aboutActor: {
    fontSize: 10,
    fontFamily: fonts.primary['400'],
    color: colors.text.noneActive,
    marginTop: -6,
  },
});
