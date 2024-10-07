import { Control, Controller, FieldError, FieldErrors } from 'react-hook-form';
import { Text, TextInput, View } from 'react-native';
import { RegisterFormType } from 'types/register';
import BoxButton from '../Button/BoxButton';

const TEXT = {
  header: '가입에 꼭 필요한 정보만\n입력 받을게요',
  label: {
    name: '이름',
    number: '전화번호',
    pw: '패스워드',
    pwcheck: '패스워드 확인',
    required: '*',
  },
  placeholder: {
    name: '이름을 입력해 주세요',
    number: '전화번호를 입력해 주세요',
    pw: '영어 숫자 포함 8자리 이상',
    pwcheck: '비밀번호를 한번 더 입력해 주세요',
  },
  button: '인증하기',
};

const Label = ({ label, error }: { label: string; error?: FieldError }) => (
  <View className='flex-row'>
    <View className='flex-row'>
      <Text className='text-sm text-white'>{label}</Text>
      <Text className='text-warningRed ml-1 text-lg'>
        {TEXT.label.required}
      </Text>
    </View>
    {error && <Text className='text-warningRed text-sm'>{error.message}</Text>}
  </View>
);

const InputField = ({
  name,
  placeholder,
  control,
  secureTextEntry = false,
  keyboardType = 'default',
}: {
  name: keyof RegisterFormType;
  placeholder: string;
  control: Control<RegisterFormType>;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'numeric';
}) => (
  <Controller
    name={name}
    control={control}
    render={({ field: { onChange, onBlur, value } }) => (
      <TextInput
        value={value as string}
        onChangeText={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        className='mb-4 h-12 w-full rounded-xl bg-inputGray px-4 py-3'
        placeholderTextColor={'#636872'}
      />
    )}
  />
);

const AuthInputTab = ({
  control,
  errors,
}: {
  control: Control<RegisterFormType>;
  errors: FieldErrors<RegisterFormType>;
}) => {
  return (
    <View className='h-fit w-full flex-col items-center'>
      <Text className='w-full text-2xl font-bold leading-9 text-white'>
        {TEXT.header}
      </Text>
      <View className='mt-8 w-full'>
        <Label label={TEXT.label.name} error={errors.name} />
        <InputField
          name='name'
          control={control}
          placeholder={TEXT.placeholder.name}
        />
        <Label label={TEXT.label.number} error={errors.number} />
        <View className='flex-row'>
          <View className='w-8/12'>
            <InputField
              name='number'
              control={control}
              placeholder={TEXT.placeholder.number}
              keyboardType='numeric'
            />
          </View>
          <View className='ml-2 h-12 flex-1'>
            <BoxButton
              onPress={() => {}}
              text={TEXT.button}
              isSelected={true}
            />
          </View>
        </View>
        <Label label={TEXT.label.pw} error={errors.pw} />
        <InputField
          name='pw'
          control={control}
          placeholder={TEXT.placeholder.pw}
          secureTextEntry={true}
        />
        <Label label={TEXT.label.pwcheck} error={errors.pwcheck} />
        <InputField
          name='pwcheck'
          control={control}
          placeholder={TEXT.placeholder.pwcheck}
          secureTextEntry={true}
        />
      </View>
    </View>
  );
};

export default AuthInputTab;
