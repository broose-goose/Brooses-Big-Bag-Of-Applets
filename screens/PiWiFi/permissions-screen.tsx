
import { StyleSheet } from 'react-native'

import { Wrapper } from "../../components/common/wrapper";

import { Text, View } from "native-base";

export const PiWiFiPermissionsScreen = () => (
    <Wrapper>
        <View style={styles.container}>
            <Text fontSize="2xl" mb={12}>GETTING PERMISSIONS</Text>
        </View>
    </Wrapper>
)

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%'
    }
});