import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';

import Config from 'react-native-config';

export const Map: React.FC = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView source={{ uri: Config.MAP_URL! }} />
    </SafeAreaView>
  );
};
