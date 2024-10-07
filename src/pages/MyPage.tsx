import { Text, View } from 'react-native';
import WebView from 'react-native-webview';

const MyPage = () => {
  return <WebView source={{ uri: 'https://www.naver.com/' }} />;
};

export default MyPage;
