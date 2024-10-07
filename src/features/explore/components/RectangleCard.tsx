import { Image, Pressable, Text, View } from 'react-native';

const RectangleCard = () => {
  return (
    <Pressable className='relative h-[140px] w-[282px] overflow-hidden rounded-[10px]'>
      <Image
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
        className='h-full w-full object-cover'
      />
      <View className='absolute bottom-3 left-3 right-3 flex-1'>
        <Text className='text-grey-1 mb-1 text-right text-base font-medium'>
          클래스 제목 입력
        </Text>
        <Text
          numberOfLines={2}
          className='text-grey-4 text-right text-sm font-medium'
        >
          클래스 상세정보 입력은 최대 두줄까지 클래스 상세정보 입력은
          최대두줄까지최대두줄까지최대두줄까지최대두줄까지최대두줄까지최대두줄까지
        </Text>
      </View>
    </Pressable>
  );
};

export default RectangleCard;
