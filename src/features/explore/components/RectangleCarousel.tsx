import { ScrollView, Text, View } from 'react-native';
import { MOCK_CARDS } from '../mock/card';
import { Card } from './Card';

const RectangleCarousel = () => {
  return (
    <View className='mb-5 flex-1'>
      <Text className='mb-3 text-base font-bold text-white'>
        오늘의 큐레이션
      </Text>
      <ScrollView horizontal>
        {MOCK_CARDS.map((card, index) => (
          <Card.Rectangle
            key={index} // TODO: id로 변경
            title={card.title}
            description={card.description}
            imageSrc={card.imageSrc}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default RectangleCarousel;
