import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';
import { HomeStackType } from 'navigation/HomeStack';

type Props = NativeStackScreenProps<HomeStackType, 'Course'>;

const CoursePage = ({ route }: Props) => {
  const { id } = route.params;

  return (
    <View>
      <Text>COURSE PAGE {id}</Text>
    </View>
  );
};

export default CoursePage;
