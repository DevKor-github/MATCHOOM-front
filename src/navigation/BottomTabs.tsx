import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ExplorePage from 'pages/ExplorePage';
import MessagePage from 'pages/MessagePage';
import MyPage from 'pages/MyPage';
import HomeStack from './HomeStack';

const Tab = createBottomTabNavigator();

export type RootTabParamList = {
  HomeTab: undefined;
  ExploreTab: undefined;
  MessageTab: undefined;
  MyTab: undefined;
};

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: '#121212' },
      }}
    >
      <Tab.Screen
        name='HomeTab'
        component={HomeStack}
        options={{ title: '홈' }}
      />
      <Tab.Screen
        name='ExploreTab'
        component={ExplorePage}
        options={{ title: '탐색' }}
      />
      <Tab.Screen
        name='MessageTab'
        component={MessagePage}
        options={{ title: '메시지' }}
      />
      <Tab.Screen
        name='MyTab'
        component={MyPage}
        options={{ title: '내 정보' }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
