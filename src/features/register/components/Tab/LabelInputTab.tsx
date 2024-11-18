import { LABEL_LIST } from 'constants/register';
import { Control, Controller } from 'react-hook-form';
import { Text, View } from 'react-native';
import { RegisterFormType } from 'types/auth';
import LabelButton from '../Button/LabelButton';
import Subheader from '../Header/SubHeader';

const TEXT = {
  header: '관심 분야를 알려주세요',
};

const LabelInputTab = ({ control }: { control: Control<RegisterFormType> }) => {
  return (
    <View className='h-full w-full flex-col'>
      <Subheader />
      <Text className='mt-5 w-full text-2xl font-bold leading-9 text-white'>
        {TEXT.header}
      </Text>
      <Controller
        name='label'
        control={control}
        render={({ field: { onChange, value } }) => (
          <View className='mt-6 flex-row flex-wrap'>
            {LABEL_LIST.map((label, index) => (
              <View key={label} className='mx-1 my-1 h-9 w-fit'>
                <LabelButton
                  text={label}
                  onPress={() => {
                    const newValue = Array.isArray(value) ? value : [];
                    onChange(
                      newValue.includes(index)
                        ? newValue.filter((item) => item !== index)
                        : [...newValue, index],
                    );
                  }}
                  isSelected={Array.isArray(value) && value.includes(index)}
                />
              </View>
            ))}
          </View>
        )}
      />
    </View>
  );
};

export default LabelInputTab;
