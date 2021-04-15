/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { IcSearch } from '../../../assets';
import BrandIcon from './BrandIcon';

const Header = ({ isDetailMovie, onPress }) => {
  return (
    <View style={styles.content}>
      <View style={styles.wrapAllContent}>
        <BrandIcon isDetailMovie={isDetailMovie} onPress={onPress} />
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
    marginTop: 20,
    marginBottom: 10,
  },
  wrapAllContent: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 12,
  },
});
