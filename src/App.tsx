import { NavigationContainer } from '@react-navigation/native';
import { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import BottomTabs from '@/navigation/BottomTabs';
import { tabNavigationRef } from '@/utils/handleTabNavigation';
import Header from '@/components/common/Header';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  });

  return (
    <SafeAreaView className='bg-background flex-1'>
      <Header />
      <NavigationContainer ref={tabNavigationRef}>
        <BottomTabs />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
