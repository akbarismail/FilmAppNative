/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { IcArrowLeft, IcLogo, IcSearch } from '../../../assets';
import { colors } from '../../../utils';

const Header = ({ isDetailMovie }) => {
  return (
    <View style={styles.content}>
      <View style={styles.wrapAllContent}>
        <View style={styles.wrapLogo}>
          {isDetailMovie ? <IcArrowLeft /> : <IcLogo />}
          {!isDetailMovie ? <Text style={styles.textLogo}>ilm</Text> : null}
        </View>
        <View>
          <IcSearch />
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  content: {
    marginTop: 24,
    marginBottom: 10,
  },
  wrapAllContent: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 12,
  },
  wrapLogo: {
    flexDirection: 'row',
  },
  textLogo: {
    color: colors.text.active,
  },
});
