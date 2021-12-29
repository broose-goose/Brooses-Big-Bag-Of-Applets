import React from 'react';

import { PiWiFiStackParamList } from '../types'

import { createStackNavigator } from '@react-navigation/stack';


import { PiWiFiRootScreen } from '../screens/PiWiFi'

const PiWiFiNavigator = createStackNavigator<PiWiFiStackParamList>();
  
export const PiWiFiStack = () => {
    return (
      <PiWiFiNavigator.Navigator screenOptions={{headerShown: false, gestureEnabled: false}}>
        <PiWiFiNavigator.Screen name="PiWiFi/root" component={PiWiFiRootScreen} options={{ title: "PiWiFi" }}/>
      </PiWiFiNavigator.Navigator>
    );
}