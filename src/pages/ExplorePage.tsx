import { ScrollView } from 'react-native';
import ListCarousel from '@/features/explore/components/ListCarousel';
import RectangleCarousel from '@/features/explore/components/RectangleCarousel';
import { Card } from '@/features/explore/components/cards';
import { MOCK_CARDS } from '@/features/explore/mock/card';

const ExplorePage = () => {
  return (
    <ScrollView className='bg-background flex-1 px-5'>
      <RectangleCarousel />
      <Card.Square
        title={MOCK_CARDS[0].title}
        guide={MOCK_CARDS[0].guide}
        imageSrc={MOCK_CARDS[0].imageSrc}
      />
      <ListCarousel title='HOT' cards={MOCK_CARDS} />
      <ListCarousel title='꿀조합 컬렉션' cards={MOCK_CARDS} />
    </ScrollView>
  );
};

export default ExplorePage;
