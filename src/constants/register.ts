import { RegisterFormType } from '@/types/register';

const AREA_LIST = [
  '전국',
  '서울',
  '경기',
  '인천',
  '강원',
  '충청',
  '전라',
  '경상',
  '제주',
];

const LABEL_LIST = [
  '코레오그래피',
  '케이팝',
  '힙합',
  '걸스힙합',
  '걸리쉬',
  '왁킹',
  '락킹',
  '힐코레오',
  '비보이',
  '크럼프',
  '팝핑',
  '하우스',
  '스트릿',
  '재즈',
  '한국무용',
  '현대무용',
  '발레',
  '브레이킹',
  '라틴',
  '대형군무',
  '프리스타일',
];

const DEFAULT_REGISTER_FORM: RegisterFormType = {
  name: '',
  number: '',
  pw: '',
  pwcheck: '',
  gender: undefined,
  birth: undefined,
  area: [],
  label: undefined,
};

export { AREA_LIST, LABEL_LIST, DEFAULT_REGISTER_FORM };
