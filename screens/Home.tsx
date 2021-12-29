import React from "react";

import { StyleSheet } from 'react-native'

import { Text, View } from "native-base";

import { Wrapper } from "../components/common/wrapper";


export const HomeScreen = () => {
  return (
    <Wrapper>
      <View style={styles.container}>
          <Text textAlign='center' fontSize="2xl" maxW="80%">
            If you've made it here, pretty sure you're in it for these sweet 👄 <Text bold>A P P L E T S</Text> 👄
          </Text>
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