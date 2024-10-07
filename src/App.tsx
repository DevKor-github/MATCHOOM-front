import BottomTabs from '@/navigation/BottomTabs';
import RegisterPage from '@/pages/RegisterPage';
import { NavigationContainer } from '@react-navigation/native';
import { useState } from 'react';

const App = () => {
  const [isLogin, setLogin] = useState(false);
  return (
    <NavigationContainer>
      {isLogin ? <BottomTabs /> : <RegisterPage />}
    </NavigationContainer>
  );
};

export default App;
