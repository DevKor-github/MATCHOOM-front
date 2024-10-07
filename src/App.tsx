import BottomTabs from '@/navigation/BottomTabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import BottomTabs from '@/navigation/BottomTabs';
import { tabNavigationRef } from '@/utils/handleTabNavigation';
import Header from '@/components/common/Header';

const App = () => {
  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  );
};

export default App;
