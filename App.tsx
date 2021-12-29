import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import {
  NativeBaseProvider
} from 'native-base';

import { Navigation } from './navigation';

export default function App() {
  return (
    <NativeBaseProvider>
      <Navigation />
    </NativeBaseProvider>
  );
}