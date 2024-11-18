import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { Control, Controller, useForm } from 'react-hook-form';
import { TextInput, View } from 'react-native';
import { useAppNavigation } from 'hooks/useAppNavigation';
import { usePostLogin } from 'services/auth/api';
import RoundButton from 'features/register/components/Button/RoundButton';
import { DEFAULT_LOGIN_FORM } from 'features/register/constants/register';
import { LoginFormType, loginSchema } from 'types/auth';

const TEXT = {
  matchoom: 'matchoom',
  header: '로그인',
  button: '로그인',
};

const InputField = ({
  name,
  placeholder,
  control,
  secureTextEntry = false,
  keyboardType = 'default',
}: {
  name: keyof LoginFormType;
  placeholder: string;
  control: Control<LoginFormType>;
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

const LoginPage = () => {
  const navigation = useAppNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormType>({
    mode: 'onBlur',
    resolver: zodResolver(loginSchema),
    defaultValues: DEFAULT_LOGIN_FORM,
  });

  const { mutate, isSuccess } = usePostLogin();

  const onSubmit = (data: LoginFormType) => {
    mutate(data);
  };

  useEffect(() => {
    if (isSuccess) {
      navigation.navigate('HomeTab');
    }
  }, [isSuccess, navigation]);

  const onPress = () => {
    handleSubmit(onSubmit)();
  };

  return (
    <View className='h-full w-full flex-1 items-center justify-center bg-background px-4 pb-5'>
      <InputField name='number' placeholder='전화번호' control={control} />
      <InputField
        name='pw'
        placeholder='비밀번호'
        control={control}
        secureTextEntry={true}
      />
      <RoundButton onPress={onPress} text={TEXT.button} />
    </View>
  );
};

export default LoginPage;
