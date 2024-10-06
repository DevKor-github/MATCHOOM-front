import { ScrollView, Text, View } from 'react-native';
import Card from '@/features/explore/components/Card';
import { MOCK_CARDS } from '@/features/explore/mock/card';

const ExplorePage = () => {
  return (
    <ScrollView className='flex-1 bg-red-400'>
      <Text>Explore</Text>
      {MOCK_CARDS.map((card) => (
        <Card
          key={card.title} // TODO: id로 변경
          title={card.title}
          description={card.description}
          guide={card.guide}
          imageSrc={card.imageSrc}
        />
      ))}
    </ScrollView>
  );
};

export default ExplorePage;
