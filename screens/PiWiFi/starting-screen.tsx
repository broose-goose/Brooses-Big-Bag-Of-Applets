import React from "react";

import { StyleSheet } from 'react-native'

import { Button, Text, View } from "native-base";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Wrapper } from "../../components/common/wrapper";
import { PiWiFiContext, PiWiFiStates } from "./state";

export const PiWiFiStartingScreen = () => {

    const context = React.useContext(PiWiFiContext);
    
    return (
        <Wrapper>
            <View style={styles.container}>
                <Text fontSize="2xl" mb={12}>Let's get that Pi, on the WiFi 😎</Text>
                <Button 
                    colorScheme="red" size="lg"
                    leftIcon={
                        <FontAwesomeIcon
                            icon={['fas', 'mobile-signal-out']}
                            size={20}
                            color={'white'}
                        />
                    }
                    onPress={() => { context?.SetState(PiWiFiStates.PERMISSIONS) }}
                >
                    Start Scanning
                </Button>
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