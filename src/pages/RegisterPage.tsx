import { DEFAULT_REGISTER_FORM } from '@/constants/register';
import RoundButton from '@/features/register/Button/RoundButton';
import AreaInputTab from '@/features/register/Tab/AreaInputTab';
import AuthInputTab from '@/features/register/Tab/AuthInputTab';
import InfoInputTab from '@/features/register/Tab/InfoInputTab';
import LabelInputTab from '@/features/register/Tab/LabelInputTab';
import StartTab from '@/features/register/Tab/StartTab';
import {
  RegisterFormType,
  TabType,
  TabTypeValues,
  registerSchema,
} from '@/types/register';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Text, TouchableOpacity, View } from 'react-native';

const TEXT = {
  matchoom: 'matchoom',
  header: {
    start: '반가워요!\n춤 클래스를 쉽고 간편하게, 맞춤',
    auth: '가입에 필요한 정보만 입력받을게요.',
    info: '선택 정보를 기입하시면 맞춤 클래스를 추천해드릴게요.',
  } as Record<TabTypeValues, string>,
  button: {
    start: '시작하기',
    auth: '다음 단계로',
    info: '다음 단계로',
    area: '다음 단계로',
    label: '가입 완료',
  } as Record<TabTypeValues, string>,
};

const TABS: Record<TabTypeValues, (props: any) => React.ReactNode> = {
  start: (props) => <StartTab {...props} />,
  auth: (props) => <AuthInputTab {...props} />,
  info: (props) => <InfoInputTab {...props} />,
  area: (props) => <AreaInputTab {...props} />,
  label: (props) => <LabelInputTab {...props} />,
};

const RegisterPage = () => {
  const [tab, setTab] = useState(0);
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<RegisterFormType>({
    mode: 'onBlur',
    resolver: zodResolver(registerSchema),
    defaultValues: DEFAULT_REGISTER_FORM,
  });

  const onSubmit = (data: RegisterFormType) => {
    console.log('현재 탭 데이터:', data);
    if (tab === Object.keys(TabType).length - 1) {
      console.log('최종 제출 데이터:', data);
      // 여기에 최종 제출 로직 추가
    } else {
      setTab(tab + 1);
    }
  };

  const onPress = () => {
    if (tab === 0) {
      setTab(tab + 1);
    } else {
      handleSubmit(onSubmit)();
    }
  };

  return (
    <View className='h-full w-full flex-1 items-center bg-background px-4 pb-5'>
      {tab !== 0 ? (
        <View className='h-16 w-full flex-row items-center justify-center'>
          <TouchableOpacity
            className='h-full w-4 border-2 border-white'
            onPress={() => setTab(tab - 1)}
          />
          <Text className='text-xl font-medium text-white'>
            {TEXT.matchoom}
          </Text>
        </View>
      ) : null}
      <View className='w-full flex-1'>
        {TABS[TabType[tab]]({ control, errors })}
      </View>
      <View className='items-centery h-fit w-full justify-center pb-8 pt-4'>
        <RoundButton onPress={onPress} text={TEXT.button[TabType[tab]]} />
      </View>
    </View>
  );
};

export default RegisterPage;
