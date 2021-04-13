/* eslint-disable prettier/prettier */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { DetailMovie, Home, Splash } from '../pages';
import TopMenu from '../pages/TopMenu';
// import { colors } from '../utils';

const Stack = createStackNavigator();
// const Tab = createMaterialTopTabNavigator();

// const MainApp = () => {
//   return (
//     <Tab.Navigator
//       initialRouteName="Home"
//       tabBarOptions={{
//         activeTintColor: colors.text.active,
//         labelStyle: { fontSize: 15 },
//       }}>
//       <Tab.Screen name="Home" component={Home} />
//     </Tab.Navigator>
//   );
// };

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="DetailMovie">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TopMenu"
        component={TopMenu}
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
