import { COLORS } from '@/constants/colors';
import MaskedView from '@react-native-masked-view/masked-view';
import { Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const TEXT = {
  subheader: ['선택 정보를 바탕으로', '클래스를 추천해 드려요'],
  matchoom: '맞춤',
};

const Subheader = () => {
  return (
    <View className='w-full'>
      <Text className='text-base font-normal leading-6 text-white'>
        {TEXT.subheader[0]}
      </Text>
      <View className='flex-row'>
        <MaskedView
          maskElement={
            <Text className='text-base font-normal leading-6'>
              {TEXT.matchoom}
            </Text>
          }
        >
          <LinearGradient
            colors={[COLORS.green, COLORS.blue]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0.6, y: 0 }}
            className='h-5 w-8'
          />
        </MaskedView>
        <Text className='text-base font-normal leading-6 text-white'>
          {TEXT.subheader[1]}
        </Text>
      </View>
    </View>
  );
};

export default Subheader;
