
import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      Root: 'Root',
      PiWiFi: {
        screens: {
          'PiWiFi/root': "PiWiFi/root"
        }
      },
    },
  },
};