import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import AuthStack from 'navigation/AuthStack';
import BottomTabs from 'navigation/BottomTabs';
import { useAuth } from 'hooks/useAuth';
import { tabNavigationRef } from 'utils/handleTabNavigation';
import { getAccessToken } from 'utils/handleToken';
import Header from 'components/common/Header';

const queryClient = new QueryClient();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { handleTokenRefresh } = useAuth();

  useEffect(() => {
    const initializeApp = async () => {
      try {
        const token = await getAccessToken();
        if (token) {
          const isRefreshSuccess = await handleTokenRefresh();
          setIsLoggedIn(isRefreshSuccess);
        } else {
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.error('Token check failed:', error);
        setIsLoggedIn(false);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
          SplashScreen.hide();
        }, 1000);
      }
    };

    initializeApp();
  }, [handleTokenRefresh]);

  if (isLoading) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer ref={tabNavigationRef}>
        <SafeAreaView className='flex-1 bg-background'>
          {isLoggedIn ? (
            <>
              <Header />
              <BottomTabs />
            </>
          ) : (
            <AuthStack />
          )}
        </SafeAreaView>
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
