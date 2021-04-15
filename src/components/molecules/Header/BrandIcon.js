/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IcArrowLeft, IcLogo } from '../../../assets';
import { colors } from '../../../utils';

const BrandIcon = ({ isDetailMovie, onPress }) => {
  return (
    <TouchableOpacity style={styles.wrapLogo} onPress={onPress}>
      <View>{isDetailMovie ? <IcArrowLeft /> : <IcLogo />}</View>
      <View>
        {!isDetailMovie ? <Text style={styles.textLogo}>ilm</Text> : null}
      </View>
    </TouchableOpacity>
  );
};

export default BrandIcon;

const styles = StyleSheet.create({
  wrapLogo: {
    flexDirection: 'row',
  },
  textLogo: {
    color: colors.text.active,
  },
});
