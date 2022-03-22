import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootStackNavigator} from './src/navigations';
import {CustomTheme} from './src/styles';

export default function App() {
  return (
    <NavigationContainer theme={CustomTheme}>
      <RootStackNavigator />
    </NavigationContainer>
  );
}
