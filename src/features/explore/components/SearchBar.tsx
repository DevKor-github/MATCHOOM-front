import { useState } from 'react';
import { TextInput, View } from 'react-native';
import SearchIcon from '@/assets/icons/search.svg';

const SearchBar = () => {
  const [value, setValue] = useState('');

  return (
    <View className='relative mb-4 h-11 w-full'>
      <TextInput
        onChangeText={setValue}
        value={value}
        placeholder='맞춤 클래스를 찾아보세요!'
        placeholderTextColor='#636872'
        textAlignVertical='center'
        className='bg-grey-7 flex h-full flex-row items-center rounded-[10px] py-0 pl-10 pr-3 text-[16px] font-medium leading-[20px] text-white'
      />
      <View className='absolute left-3 top-[10px]'>
        <SearchIcon />
      </View>
    </View>
  );
};

export default SearchBar;
