import { COLORS } from 'constants/colors';
import { AREA_LIST } from 'constants/register';
import { Control, Controller } from 'react-hook-form';
import { ScrollView, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { RegisterFormType } from 'types/auth';
import BoxButton from '../Button/BoxButton';
import Subheader from '../Header/SubHeader';

const TEXT = {
  header: '관심 지역을 알려주세요',
};

const AreaInputTab = ({ control }: { control: Control<RegisterFormType> }) => {
  return (
    <View className='h-full w-full flex-col'>
      <Subheader />
      <Text className='mt-5 w-full text-2xl font-bold leading-9 text-white'>
        {TEXT.header}
      </Text>
      <Controller
        name='area'
        control={control}
        render={({ field: { onChange, value } }) => (
          <ScrollView
            className='mt-5 w-full'
            showsVerticalScrollIndicator={false}
          >
            {AREA_LIST.map((area) => (
              <View key={area} className='my-1 h-12 w-full'>
                <BoxButton
                  text={area}
                  onPress={() => {
                    const newValue = Array.isArray(value) ? value : [];
                    onChange(
                      newValue.includes(area)
                        ? newValue.filter((item) => item !== area)
                        : [...newValue, area],
                    );
                  }}
                  isSelected={Array.isArray(value) && value.includes(area)}
                  textStyle='font-bold'
                />
              </View>
            ))}
          </ScrollView>
        )}
      />
      <LinearGradient
        colors={[`${COLORS.background}00`, `${COLORS.background}FF`]}
        className='absolute bottom-0 h-12 w-full'
      />
    </View>
  );
};

export default AreaInputTab;
