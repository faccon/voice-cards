import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {L_SCREEN, SI_SCREEN, SU_SCREEN} from '../constants';
import {LandingScreen} from '../screens/LandingScreen';
import {SignInSc} from '../screens/SignInSc';
import {SignUpSc} from '../screens/SignUpSc';
import {MainStackParams} from '../types';

const MainStack = createNativeStackNavigator<MainStackParams>();

export function Navigator() {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName={L_SCREEN}>
        <MainStack.Screen
          component={LandingScreen}
          name={L_SCREEN}
          options={{
            headerShown: false,
          }}
        />
        <MainStack.Screen
          component={SignInSc}
          name={SI_SCREEN}
          options={{
            headerShown: false,
            presentation: 'formSheet',
            animation: 'slide_from_right',
          }}
        />
        <MainStack.Screen
          component={SignUpSc}
          name={SU_SCREEN}
          options={{
            headerShown: false,
            presentation: 'formSheet',
            animation: 'slide_from_left',
          }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
