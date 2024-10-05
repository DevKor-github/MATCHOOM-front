import { TouchableOpacity, View } from 'react-native';
import { navigateToHomeTab } from '@/utils/handleTabNavigation';
import TextLogo from '@/assets/icons/logo-text.svg';
import Logo from '@/assets/icons/logo.svg';

const Header = () => {
  const handleClick = () => {
    navigateToHomeTab();
  };

  return (
    <View className='h-16 px-5 pb-6 pt-5'>
      <TouchableOpacity
        onPress={handleClick}
        activeOpacity={0.95}
        className='flex flex-row gap-2'
      >
        <Logo />
        <TextLogo />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
