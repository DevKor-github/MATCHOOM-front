import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';

const Stack = createNativeStackNavigator();

export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
};

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Login' component={LoginPage} />
      <Stack.Screen name='Register' component={RegisterPage} />
    </Stack.Navigator>
  );
};

export default AuthStack;
