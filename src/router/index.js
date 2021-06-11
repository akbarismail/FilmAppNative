/* eslint-disable prettier/prettier */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {
  ComingSoon,
  DetailMovie,
  Home,
  Popular,
  Splash,
  TopRated,
} from '../pages';
import { Header } from '../components';
import { colors, fonts } from '../utils';
import { View, StyleSheet } from 'react-native';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const MainApp = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapContainer}>
        <Header />
      </View>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: colors.text.active,
          inactiveTintColor: colors.black,
          style: {
            backgroundColor: colors.white,
            marginTop: 20,
            marginHorizontal: 20,
            elevation: 0,
            borderBottomWidth: 1,
            borderBottomColor: colors.border.secondary,
          },
          labelStyle: {
            fontSize: 10,
            fontFamily: fonts.primary['400'],
          },
          indicatorStyle: {
            backgroundColor: colors.border.primary,
          },
        }}>
        <Tab.Screen name="For You" component={Home} />
        <Tab.Screen name="Trending" component={Popular} />
        <Tab.Screen name="Top Rated" component={TopRated} />
        <Tab.Screen name="Next Soon" component={ComingSoon} />
      </Tab.Navigator>
    </View>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DetailMovie"
        component={DetailMovie}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.white },
  wrapContainer: { paddingHorizontal: 20 },
});
