import { useEffect, useRef } from 'react';
import { Alert, View } from 'react-native';
import NativeWebView from 'react-native-webview';
import {
  deleteAccessToken,
  deleteRefreshToken,
  getAccessToken,
  getRefreshToken,
  setAccessToken,
  setRefreshToken,
} from '@/utils/handleToken';

interface MessageType {
  type: string;
  value?: string;
}

interface Props {
  uri: string;
}

const WebView = ({ uri }: Props) => {
  const webviewRef = useRef<NativeWebView>(null);

  const postMessage = (message: MessageType) => {
    if (!webviewRef.current) {
      return;
    }
    const data = JSON.stringify(message);
    webviewRef.current.injectJavaScript(
      `window.postMessage(
        ${data}
      );
      true;`,
    );
  };

  const handleInit = async () => {
    if (!webviewRef.current) {
      return;
    }
    const refreshToken = await getRefreshToken();
    const accessToken = await getAccessToken();
    const token = refreshToken + ' ' + accessToken;
    postMessage({ type: 'INIT', value: token });
  };

  const handleLogout = () => {
    deleteAccessToken();
    deleteRefreshToken();
  };

  const handleMessage = (e: { nativeEvent: { data?: string } }) => {
    const message: MessageType = JSON.parse(e.nativeEvent.data ?? '{}');
    const { type, value } = message;
    // Alert.alert(`Message received from Web: ${type}, ${value}`);

    switch (type) {
      case 'LOGOUT':
        handleLogout();
        break;
      default:
        console.error(`Unknown Message from Web: ${type}, ${value}`);
    }
  };

  return (
    <View className='flex-1 bg-background'>
      <NativeWebView
        webviewDebuggingEnabled
        style={{ backgroundColor: '#121212' }}
        ref={webviewRef}
        source={{ uri }}
        onLoadStart={handleInit}
        onMessage={handleMessage}
      />
    </View>
  );
};

export default WebView;
