import { RegisterFormType } from '@/types/register';
import { getStringByDate } from '@/utils/date';
import { useState } from 'react';
import { Control, Controller, useWatch } from 'react-hook-form';
import { Text, View } from 'react-native';
import DatePicker from 'react-native-date-picker';
import BoxButton from '../Button/BoxButton';
import Subheader from '../Header/SubHeader';

const TEXT = {
  header: '나이와 성별을 알려주세요',
  label: {
    gender: '성별',
    birth: '생년월일',
  },
  placeholder: {
    date: 'YYYY / MM / DD',
  },
  gender: {
    male: '남자',
    female: '여자',
  },
};

const InfoInputTab = ({
  control,
}: {
  control: Control<RegisterFormType, any>;
}) => {
  const [open, setOpen] = useState(false);
  const birth = useWatch({
    control,
    name: 'birth',
  });
  return (
    <View className='h-fit w-full flex-col items-center'>
      <Subheader />
      <Text className='mt-5 w-full text-2xl font-bold leading-9 text-white'>
        {TEXT.header}
      </Text>
      <View className='mt-5 w-full'>
        <Text className='mb-1 text-sm font-bold text-white'>
          {TEXT.label.gender}
        </Text>
        <Controller
          name='gender'
          control={control}
          render={({ field: { onChange, value } }) => (
            <View className='flex-row justify-between'>
              <View className='h-12 w-[49%]'>
                <BoxButton
                  text={TEXT.gender.male}
                  onPress={() => onChange('male')}
                  isSelected={value === 'male'}
                  textStyle='font-bold'
                />
              </View>
              <View className='h-12 w-[49%]'>
                <BoxButton
                  text={TEXT.gender.female}
                  onPress={() => onChange('female')}
                  isSelected={value === 'female'}
                  textStyle='font-bold'
                />
              </View>
            </View>
          )}
        />
        <Text className='mb-1 mt-3 text-sm font-bold text-white'>
          {TEXT.label.birth}
        </Text>
        <View className='h-12 w-full'>
          <BoxButton
            text={birth ? getStringByDate(birth) : TEXT.placeholder.date}
            onPress={() => {
              setOpen(!open);
            }}
            textStyle='text-[#BCC1CB] text-sm tracking-[9px]'
          />
        </View>
      </View>
      {open && (
        <Controller
          name='birth'
          control={control}
          render={({ field: { onChange, value } }) => (
            <DatePicker
              date={value || new Date()}
              mode='date'
              theme='dark'
              onDateChange={(date) => {
                onChange(date);
              }}
              maximumDate={new Date()}
            />
          )}
        />
      )}
    </View>
  );
};

export default InfoInputTab;
