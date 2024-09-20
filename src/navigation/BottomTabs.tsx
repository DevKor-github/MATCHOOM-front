import CourseAddPage from '@/pages/CourseAddPage';
import HomePage from '@/pages/HomePage';
import LikesPage from '@/pages/LikesPage';
import LogPage from '@/pages/LogPage';
import MyPage from '@/pages/MyPage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Home' component={HomePage} />
      <Tab.Screen name='Log' component={LogPage} />
      <Tab.Screen name='CourseAdd' component={CourseAddPage} />
      <Tab.Screen name='Likes' component={LikesPage} />
      <Tab.Screen name='My' component={MyPage} />
    </Tab.Navigator>
  );
};

export default BottomTabs;
