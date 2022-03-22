import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from '../screens/main';
import WaveScreen from '../screens/wave';
import {MAIN_SCREEN, WAVE_SCREEN} from './constants';

export default function RootStackNavigator() {
  const RootStack = createNativeStackNavigator();

  return (
    <RootStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={MAIN_SCREEN}>
      <RootStack.Screen name={MAIN_SCREEN} component={MainScreen} />
      <RootStack.Screen name={WAVE_SCREEN} component={WaveScreen} />
    </RootStack.Navigator>
  );
}
