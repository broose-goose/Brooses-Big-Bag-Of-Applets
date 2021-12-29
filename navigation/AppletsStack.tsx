
import React from "react";

import { createDrawerNavigator, DrawerNavigationOptions } from '@react-navigation/drawer';

import { HeaderRightComponent } from "../components/navigation/HeaderRight";

import { AppletsStackParamList } from '../types'

import { HomeScreen } from '../screens/Home';

import { PiWiFiStack } from './PiWiFi'

const AppletsNavigator = createDrawerNavigator<AppletsStackParamList>();

export const AppletsStack = () => {
    return (
        <AppletsNavigator.Navigator screenOptions={({navigation}) => {
            return {
                headerRight: () => (<HeaderRightComponent />),
                gestureEnabled: false
            }
        }}>
            <AppletsNavigator.Screen name="Root" component={HomeScreen} options={{title: "Broose's Applets"}} />
            <AppletsNavigator.Screen name="PiWiFi" component={PiWiFiStack} />
        </AppletsNavigator.Navigator>
    )
} 