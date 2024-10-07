import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackType } from 'navigation/HomeStack';
import WebView from 'react-native-webview';

type Props = NativeStackScreenProps<HomeStackType, 'Home'>;

const HomePage = ({ navigation }: Props) => {
  return <WebView source={{ uri: 'https://portal.korea.ac.kr/' }} />;
};

export default HomePage;
