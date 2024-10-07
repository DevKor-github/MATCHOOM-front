import CourseAddPage from '@/pages/CourseAddPage';
import LikesPage from '@/pages/LikesPage';
import LogPage from '@/pages/LogPage';
import MyPage from '@/pages/MyPage';
import RegisterPage from '@/pages/RegisterPage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='HomeTab' component={HomeStack} />
      <Tab.Screen name='LogTab' component={RegisterPage} />
      <Tab.Screen name='CourseAddTab' component={CourseAddPage} />
      <Tab.Screen name='LikesTab' component={LikesPage} />
      <Tab.Screen name='MyTab' component={MyPage} />
    </Tab.Navigator>
  );
};

export default BottomTabs;
