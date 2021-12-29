import React from "react";

import { StyleSheet } from 'react-native'

import { Text, View } from "native-base";

import { Wrapper } from "../components/common/wrapper";

export const HomeScreen = () => {
  return (
    <Wrapper>
      <View style={styles.container}>
        <Text>I'ma home, bitch</Text>
      </View>
    </Wrapper>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%'
    }
});