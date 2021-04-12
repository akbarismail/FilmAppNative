/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors, fonts } from '../../../utils';

const Navigation = () => {
  return (
    <TouchableOpacity style={styles.wrapContent}>
      <View style={styles.wrapText}>
        <Text style={styles.textContent}>Untuk Anda</Text>
        <Text style={styles.textContent}>Terbaru</Text>
        <Text style={styles.textContent}>Terpopuler</Text>
        <Text style={styles.textContent}>Rating</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Navigation;

const styles = StyleSheet.create({
  wrapContent: {
    borderBottomWidth: 1,
    borderColor: colors.border.secondary,
  },
  wrapText: {
    flexDirection: 'row',
  },
  textContent: {
    fontSize: 15,
    fontFamily: fonts.primary['400'],
    color: colors.text.active,
    marginBottom: 5,
    marginRight: 19,
  },
});
