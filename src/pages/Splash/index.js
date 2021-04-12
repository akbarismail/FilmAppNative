/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../utils';

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
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
  textDesc: { color: colors.black, fontSize: 20, fontWeight: '500' },
});
