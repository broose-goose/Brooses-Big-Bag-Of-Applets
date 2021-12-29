
import React from 'react';

import { 
  NavigationContainer,
  createNavigationContainerRef,
  StackActions,
} from '@react-navigation/native';


import { AppletsStack } from './AppletsStack'

const navigationRef = createNavigationContainerRef()

export const Navigate = (name: string) => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.push(name));
  }
}

export const Navigation = () => {
    return (
      <NavigationContainer
        ref={navigationRef}
      >
        <AppletsStack />
      </NavigationContainer>
    );
  }