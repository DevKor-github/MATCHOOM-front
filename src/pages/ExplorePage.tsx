import { ScrollView } from 'react-native';
import ListCarousel from '@/features/explore/components/ListCarousel';
import RectangleCard from '@/features/explore/components/RectangleCard';
import { MOCK_CARDS } from '@/features/explore/mock/card';

const ExplorePage = () => {
  return (
    <ScrollView className='bg-background flex-1 px-5'>
      <RectangleCard />
      <ListCarousel title='HOT' cards={MOCK_CARDS} />
      <ListCarousel title='꿀조합 컬렉션' cards={MOCK_CARDS} />
    </ScrollView>
  );
};

export default ExplorePage;
