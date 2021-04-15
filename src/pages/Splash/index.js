/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, fonts } from '../../utils';

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('MainApp');
    }, 3000);
  }, [navigation]);

  return (
    <View style={styles.sectionPage}>
      <Text style={styles.textDesc}>Film App</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  sectionPage: {
    backgroundColor: colors.white,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textDesc: {
    color: colors.text.active,
    fontSize: 20,
    fontFamily: fonts.primary['600'],
  },
});
