import { useState } from 'react';
import { TextInput, View } from 'react-native';
import SearchIcon from '@/assets/icons/search.svg';

const SearchBar = () => {
  const [value, setValue] = useState('');

  return (
    <View className='relative flex-1'>
      <TextInput
        onChangeText={setValue}
        value={value}
        placeholder='맞춤 클래스를 찾아보세요!'
        placeholderTextColor='#636872'
        textAlignVertical='center'
        className='bg-grey-7 mb-4 flex h-11 flex-1 flex-row items-center rounded-[10px] py-0 pl-10 pr-3 text-[16px] font-medium leading-[20px] text-white'
      />
      <View className='absolute left-3 top-[10px]'>
        <SearchIcon />
      </View>
    </View>
  );
};

export default SearchBar;
