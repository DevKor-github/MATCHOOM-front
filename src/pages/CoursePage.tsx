import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackType } from 'navigation/HomeStack';
import { Text, View } from 'react-native';
import WebView from 'react-native-webview';

type Props = NativeStackScreenProps<HomeStackType, 'Course'>;

const CoursePage = ({ route }: Props) => {
  return <WebView source={{ uri: 'https://www.figma.com' }} />;
};

export default CoursePage;
