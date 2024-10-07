import { Image, Pressable, Text, View } from 'react-native';
import { CardType } from '.';

type Props = Omit<CardType, 'guide'>;

const RectangleCard = ({ title, description, imageSrc }: Props) => {
  return (
    <Pressable className='relative h-[140px] w-[282px] overflow-hidden rounded-[10px]'>
      <Image
        source={{
          uri: imageSrc,
        }}
        className='h-full w-full object-cover'
      />
      <View className='absolute bottom-3 left-3 right-3 flex-1'>
        <Text className='text-grey-1 mb-1 text-right text-base font-medium'>
          {title}
        </Text>
        <Text
          numberOfLines={2}
          className='text-grey-4 text-right text-sm font-medium'
        >
          {description}
        </Text>
      </View>
    </Pressable>
  );
};

export default RectangleCard;
