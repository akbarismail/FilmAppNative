/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { IcLogo, IcSearch } from '../../../assets';
import { colors } from '../../../utils';

const Header = () => {
  return (
    <View style={styles.content}>
      <View>
        <View style={styles.wrapLogo}>
          <IcLogo />
          <Text style={styles.textLogo}>ilm</Text>
        </View>
      </View>
      <View>
        <IcSearch />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    paddingVertical: 12,
    justifyContent: 'space-between',
    marginTop: 24,
    marginBottom: 10,
    alignItems: 'center',
  },
  wrapLogo: {
    flexDirection: 'row',
  },
  textLogo: {
    color: colors.text.active,
  },
});
