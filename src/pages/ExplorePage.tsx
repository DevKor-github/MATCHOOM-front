import { Text, View } from 'react-native';
import WebView from 'react-native-webview';

const ExplorePage = () => {
  return <WebView source={{ uri: 'https://www.notion.so' }} />;
};

export default ExplorePage;
