import { Text, View } from 'react-native';
import WebView from 'react-native-webview';

const MessagePage = () => {
  return <WebView source={{ uri: 'https://www.youtube.com/' }} />;
};

export default MessagePage;
