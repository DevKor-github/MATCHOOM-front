import { ScrollView, Text, View } from 'react-native';
import { MOCK_CARDS } from '../mock/card';
import { Card } from './cards';

const SquareCarousel = () => {
  return (
    <View className='mb-5 flex-1'>
      <Text className='mb-3 text-base font-bold text-white'>곧 마감돼요!</Text>
      <ScrollView horizontal>
        {MOCK_CARDS.map((card, index) => (
          <Card.Square
            key={index} // TODO: id로 변경
            title={card.title}
            guide={card.guide}
            imageSrc={card.imageSrc}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default SquareCarousel;
