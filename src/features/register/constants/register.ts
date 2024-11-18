import { LoginFormType, RegisterFormType } from 'types/auth';

const AREA_LIST = [
  '전국',
  '서울',
  '경기',
  '강원',
  '충청',
  '전라',
  '경상',
  '제주',
];

const LABEL_LIST: Record<number, string> = {
  0: '코레오그래피',
  1: '케이팝',
  2: '힙합',
  3: '걸스힙합',
  4: '걸리쉬',
  5: '왁킹',
  6: '락킹',
  7: '힐코레오',
  8: '비보이',
  9: '크럼프',
  10: '팝핑',
  11: '하우스',
  12: '스트릿',
  13: '재즈',
  14: '한국무용',
  15: '현대무용',
  16: '발레',
  17: '브레이킹',
  18: '라틴',
  19: '대형군무',
  20: '프리스타일',
};

const DEFAULT_REGISTER_FORM: RegisterFormType = {
  name: '',
  number: '',
  pw: '',
  pwcheck: '',
  gender: undefined,
  birth: undefined,
  area: undefined,
  label: undefined,
};

const DEFAULT_LOGIN_FORM: LoginFormType = {
  number: '',
  pw: '',
};

export { AREA_LIST, LABEL_LIST, DEFAULT_REGISTER_FORM, DEFAULT_LOGIN_FORM };
