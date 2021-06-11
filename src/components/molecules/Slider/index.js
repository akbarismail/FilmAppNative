/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, View, Dimensions, ScrollView, Image } from 'react-native';
import { CardContentFilm } from '..';
import { url_img } from '../../../config/api';

const Slider = ({ playing }) => {
  const { width } = Dimensions.get('window');
  const height = width * 0.4;
  const { title, poster_path, vote_average } = playing;

  return (
    <View style={styles.container(width, height)}>
      <View style={styles.wrapSection}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View>
            <Image
              source={{
                uri:
                  'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1480&q=80',
              }}
              style={styles.imgBg(width, height)}
            />
            <CardContentFilm
              imgFrom={url_img + poster_path}
              title={title}
              desc="Animation, Adventure, Comedy"
              rate={vote_average}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  container: (width, height) => ({
    width,
    height,
  }),
  wrapSection: { minHeight: 180 },
  imgBg: (width, height) => ({
    width: width / 1.1,
    height,
    resizeMode: 'cover',
    marginTop: 10,
    borderRadius: 10,
    marginRight: 30,
    justifyContent: 'center',
  }),
});
