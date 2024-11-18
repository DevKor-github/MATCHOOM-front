import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import Config from 'react-native-config';
import SplashScreen from 'react-native-splash-screen';
import BottomTabs from 'navigation/BottomTabs';
import RegisterPage from 'pages/RegisterPage';
import { tabNavigationRef } from 'utils/handleTabNavigation';
import Header from 'components/common/Header';
import LoginPage from './pages/LoginPage';

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
    console.log(Config.API_KEY);
  });

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView className='flex-1 bg-background'>
        {/* <LoginPage /> */}
        <RegisterPage />
        {/* <Header />
        <NavigationContainer ref={tabNavigationRef}>
          <BottomTabs />
        </NavigationContainer> */}
      </SafeAreaView>
    </QueryClientProvider>
  );
};

export default App;
