
import React from "react";

import { createDrawerNavigator, DrawerNavigationOptions } from '@react-navigation/drawer';

import { AppletsStackParamList } from '../types'

import { HomeScreen } from '../screens/Home';

const AppletsNavigator = createDrawerNavigator<AppletsStackParamList>();

export const AppletsStack = () => {
    return (
        <AppletsNavigator.Navigator>
            <AppletsNavigator.Screen name="Home" component={HomeScreen} />
        </AppletsNavigator.Navigator>
    )
} 