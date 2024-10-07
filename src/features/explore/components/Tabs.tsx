import { ReactNode, useState } from 'react';
import { Pressable, Text, View } from 'react-native';

const TABS = ['전체보기', '팔로잉 댄서만 보기'] as const;
type TabType = (typeof TABS)[number];

const Tabs = () => {
  const [selectedTab, setSelectedTab] = useState<TabType>('전체보기');

  return (
    <View className='mb-6 flex flex-row items-center'>
      {TABS.map((name) => (
        <Tab
          selected={selectedTab === name}
          handleClick={() => setSelectedTab(name)}
        >
          {name}
        </Tab>
      ))}
    </View>
  );
};

export default Tabs;

interface TabProps {
  children: ReactNode;
  selected: boolean;
  handleClick: () => void;
}

const Tab = ({ children, selected, handleClick }: TabProps) => {
  return (
    <Pressable onPress={handleClick} className='mr-[10px]'>
      <Text
        className={`text-sm font-semibold ${selected ? 'text-green' : 'text-grey-6'}`}
      >
        {children}
      </Text>
      <View
        className={`mt-[2px] h-[2px] rounded-full ${selected ? 'bg-green' : 'bg-transparent'}`}
      />
    </Pressable>
  );
};
