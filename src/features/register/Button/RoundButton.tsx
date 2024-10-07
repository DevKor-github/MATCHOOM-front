import { COLORS } from '@/constants/colors';
import { Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const RoundButton = ({
  onPress,
  text,
}: {
  onPress: () => void;
  text: string;
}) => {
  return (
    <TouchableOpacity className='h-14 w-full' onPress={onPress}>
      <LinearGradient
        colors={[COLORS.blue, COLORS.green]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0.6, y: 0 }}
        className='h-full w-full items-center justify-center rounded-full'
      >
        <Text className='text-lg font-bold'>{text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default RoundButton;
