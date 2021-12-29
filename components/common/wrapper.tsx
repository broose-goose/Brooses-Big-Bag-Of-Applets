import React from 'react';

import { View } from 'native-base';

import { ChildProps } from '../../types'

import SafeAreaView from 'react-native-safe-area-view';

export const Wrapper = ({ children }: ChildProps) => {
    return (
        <SafeAreaView>
            <View 
                bg={'gray.100'}
                minHeight="100%"
                maxHeight="100%"
                minWidth="100%"
                maxWidth="100%"
            >
                {children}
            </View>
        </SafeAreaView>
    );
}