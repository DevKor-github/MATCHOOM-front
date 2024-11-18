import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { RootTabParamList } from '../navigation/BottomTabs';

export const useAppNavigation = () => {
  return useNavigation<BottomTabNavigationProp<RootTabParamList>>();
};
