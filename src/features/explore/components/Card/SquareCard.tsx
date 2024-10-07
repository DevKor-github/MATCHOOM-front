import { Image, Pressable, Text, View } from 'react-native';
import { CardType } from '.';

type Props = Omit<CardType, 'description'>;

const SquareCard = ({ title, guide, imageSrc }: Props) => {
  return (
    <Pressable className='relative mr-3 h-[170px] w-[170px] overflow-hidden rounded-[10px]'>
      <Image
        source={{
          uri: imageSrc,
        }}
        className='h-full w-full object-cover'
      />
      <View className='absolute bottom-3 left-3 right-3 flex-1'>
        <Text className='text-green mb-1 text-right text-xs font-semibold'>
          {guide}
        </Text>
        <Text
          numberOfLines={2}
          className='text-grey-1 text-right text-base font-medium'
        >
          {title}
        </Text>
      </View>
    </Pressable>
  );
};

export default SquareCard;
