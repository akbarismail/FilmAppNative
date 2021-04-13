/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { ImgBannerDetail, ImgCoverDetail } from '../../assets';
import { CardContentFilm, Gap, Header } from '../../components';
import { colors } from '../../utils';

const DetailMovie = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground source={ImgBannerDetail} style={styles.background}>
          <View style={styles.wrapSection}>
            <Header isDetailMovie />
          </View>
          <View style={styles.wrapSection}>
            <Gap height={85} />
            <CardContentFilm
              isDetailContent
              imgFrom={ImgCoverDetail}
              title="Onward"
              year={2020}
            />
          </View>
        </ImageBackground>

        <Gap height={40} />
      </ScrollView>
    </View>
  );
};

export default DetailMovie;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.white },
  background: { height: 303 },
  wrapSection: { paddingHorizontal: 20 },
});
