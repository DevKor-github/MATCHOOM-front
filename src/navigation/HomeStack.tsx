import CoursePage from '@/pages/CoursePage';
import HomePage from '@/pages/HomePage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type HomeStackType = {
  Home: undefined;
  Course: {
    id: number;
  };
};

const Stack = createNativeStackNavigator<HomeStackType>();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name='Home' component={HomePage} />
      <Stack.Screen
        name='Course'
        component={CoursePage}
        initialParams={{ id: 1 }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;