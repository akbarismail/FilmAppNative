/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, View, Dimensions, ScrollView, Image } from 'react-native';
import { CardContentFilm } from '..';
import { ImgCoverFilm } from '../../../assets';
import { Gap } from '../../atoms';

const Slider = ({ images }) => {
  const { width } = Dimensions.get('window');
  const height = width * 0.4;

  return (
    <View style={styles.container(width, height)}>
      <View style={styles.wrapSection}>
        <ScrollView
          pagingEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ width, height }}>
          <Gap width={20} />
          {images.map((item, index) => (
            <React.Fragment key={index}>
              <View>
                <Image
                  source={{ uri: item }}
                  style={styles.imgBg(width, height)}
                />
                <CardContentFilm
                  imgFrom={ImgCoverFilm}
                  title="Dreambuilders"
                  desc="Animation, Adventure, Comedy"
                  rate={6.5}
                />
              </View>
            </React.Fragment>
          ))}
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
    marginHorizontal: -20,
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
