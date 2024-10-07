import { Pressable, Text, View } from 'react-native';
import { Card, CardType } from './cards';

interface Props {
  title: string;
  cards: CardType[];
  // redirectUrl: string;
}

const ListCarousel = ({ title, cards }: Props) => {
  // TODO: 더보기 버튼 누를 시 redirect 구현
  // const handleClick = () => {
  // }
  const slicedCards = cards.slice(0, 3);
  return (
    <View className='mb-2 flex-1'>
      <View className='mb-3 flex flex-1 flex-row items-center justify-between'>
        <Text className='text-base font-bold text-white'>{title}</Text>
        <Pressable>
          <Text className='text-grey-6 text-sm'>더보기</Text>
        </Pressable>
      </View>
      {slicedCards.map((card, index) => (
        <Card
          key={index} // TODO: id로 변경
          title={card.title}
          description={card.description}
          guide={card.guide}
          imageSrc={card.imageSrc}
        />
      ))}
    </View>
  );
};

export default ListCarousel;
