import { Image, Pressable, Text, View } from 'react-native';
import { CardType } from '.';

const PrimaryCard = ({ title, description, guide, imageSrc }: CardType) => {
  return (
    <Pressable className='bg-background mb-3 flex h-[84px] w-full flex-1 flex-row'>
      <View>
        <Image
          source={{
            uri: imageSrc,
          }}
          className='mr-3 h-full w-[84px] rounded-[10px] object-cover'
        />
      </View>
      <View className='flex-1'>
        <Text className='text-green mb-1 text-xs font-semibold'>{guide}</Text>
        <Text className='text-grey-1 mb-1 text-base font-medium'>{title}</Text>
        <Text numberOfLines={2} className='text-grey-4 text-sm font-semibold'>
          {description}
        </Text>
      </View>
    </Pressable>
  );
};

export default PrimaryCard;
