import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackType } from 'navigation/HomeStack';
import { Button, Text, View } from 'react-native';

type Props = NativeStackScreenProps<HomeStackType, 'Home'>;

const HomePage = ({ navigation }: Props) => {
  const handleClick = () => {
    navigation.navigate('Course', { id: 12 });
  };

  return (
    <View className='bg-background'>
      <Text>
        HOME
        <Button title='Go to Course' onPress={handleClick} />
      </Text>
    </View>
  );
};

export default HomePage;
