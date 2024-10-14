import MaskedView from '@react-native-masked-view/masked-view';
import { COLORS } from 'constants/colors';
import { Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const TEXT = {
  header: '반가워요!\n춤 클래스를 쉽고 간편하게, ',
  subheader:
    '클래스 둘러보기, 결제, 오픈 알림까지\n맞춤에서 한번에 끝낼 수 있어요!',
  matchoom: '\n맞춤 ',
  tos: [
    '서비스 시작은 ',
    '이용약관',
    ' / ',
    '개인정보 처리방침',
    ' 동의를 의미합니다',
  ],
};

const StartTab = () => {
  return (
    <View className='h-fit w-full flex-col items-center justify-end'>
      <View className='w-full flex-row'>
        <Text className='text-2xl font-bold leading-9 text-white'>
          {TEXT.header}
        </Text>
        <MaskedView
          maskElement={
            <Text className='text-2xl font-bold leading-9'>
              {TEXT.matchoom}
            </Text>
          }
        >
          <LinearGradient
            colors={[COLORS.green, COLORS.blue]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0.6, y: 0 }}
            className='h-16 w-10'
          />
        </MaskedView>
      </View>
      <Text className='mb-4 mt-14 text-center text-sm font-normal leading-6 text-white'>
        {TEXT.subheader}
      </Text>
      <View className='h-1/2 w-full flex-col items-center space-y-3'>
        <View className='h-[48%] w-full rounded-xl bg-[#3C4048]' />
        <View className='h-full w-full flex-row justify-between'>
          <View className='h-[48%] w-[48%] rounded-xl bg-[#3C4048]' />
          <View className='h-[48%] w-[48%] rounded-xl bg-[#3C4048]' />
        </View>
      </View>
      <Text className='mb-2 mt-10 text-xs text-[#BCC1CB]'>
        {TEXT.tos[0]}
        <Text className='underline'>{TEXT.tos[1]}</Text>
        {TEXT.tos[2]}
        <Text className='underline'>{TEXT.tos[3]}</Text>
        {TEXT.tos[4]}
      </Text>
    </View>
  );
};

export default StartTab;
