import {
  UseMutationResult,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import axios from 'axios';
import { setAccessToken, setRefreshToken } from 'utils/handleToken';
import { instance } from 'services/config';
import { getStringByDate } from 'features/register/utils/date';
import {
  PostLoginRequest,
  PostLoginResponse,
  PostRegisterRequest,
  PostRegisterResponse,
  RefreshAccessTokenResponse,
} from './type';

const postRegister = async (
  data: PostRegisterRequest,
): Promise<PostRegisterResponse> => {
  const request = {
    name: data.name,
    userId: data.number,
    password: data.pw,
    nickname: data.name,
    birthday: getStringByDate(data.birth || new Date(), '-'),
    gender: data.gender,
    genres: data.label,
    address: data.area,
  };
  console.log('register request', request);
  try {
    const response = await instance.post('/auth/register', request);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Register failed:', {
        status: error.response?.status,
        data: error.response?.data,
        message: error.message,
      });
    } else {
      console.error('Register failed with error:', error);
    }
    throw error;
  }
};

export const usePostRegister = (): UseMutationResult<
  PostRegisterResponse,
  Error,
  PostRegisterRequest
> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postRegister,
    onSuccess: (response) => {
      setAccessToken(response.accessToken);
      setRefreshToken(response.refreshToken);
      queryClient.invalidateQueries({
        queryKey: ['register'],
      });
    },
    onError: (error) => {
      console.error('register error', error);
    },
  });
};

const postLogin = async (
  data: PostLoginRequest,
): Promise<PostLoginResponse> => {
  const request = {
    userId: data.number,
    password: data.pw,
  };
  console.log('API Endpoint:', instance.defaults.baseURL + '/auth/login');
  console.log('login request', request);
  try {
    const response = await instance.post('/auth/login', request);
    console.log('login success', response.data);

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Login failed:', {
        status: error.response?.status,
        data: error.response?.data,
        message: error.message,
      });
    } else {
      console.error('Login failed with error:', error);
    }
    throw error;
  }
};

export const usePostLogin = (): UseMutationResult<
  PostLoginResponse,
  Error,
  PostLoginRequest
> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postLogin,
    onSuccess: (response) => {
      setAccessToken(response.accessToken);
      setRefreshToken(response.refreshToken);
      queryClient.invalidateQueries({ queryKey: ['login'] });
    },
  });
};

export const refreshAccessToken =
  async (): Promise<RefreshAccessTokenResponse> => {
    const response = await instance.post('/auth/refresh-token');
    return response.data;
  };
