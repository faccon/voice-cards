import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {L_SCREEN} from '../constants';
import {LandingScreen} from '../screens/LandingScreen';
import {MainStackParams} from '../types';

const MainStack = createNativeStackNavigator<MainStackParams>();

export function Navigator() {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName={L_SCREEN}>
        <MainStack.Screen component={LandingScreen} name={L_SCREEN} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
