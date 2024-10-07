import { createNavigationContainerRef } from '@react-navigation/native';

export const tabNavigationRef = createNavigationContainerRef();

export const navigateToHomeTab = () => {
  if (tabNavigationRef.isReady()) {
    // @ts-expect-error
    tabNavigationRef.navigate('HomeTab');
  }
};
