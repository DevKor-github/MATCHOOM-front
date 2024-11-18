import { PostRegisterRequest } from 'services/auth/type';
import { RegisterFormType } from 'types/auth';

const fetchRegisterData = (data: RegisterFormType): PostRegisterRequest => {
  return Object.fromEntries(
    Object.entries(data).map(([key, value]) => [
      key,
      value === '' ? null : value,
    ]),
  ) as PostRegisterRequest;
};

export { fetchRegisterData };
