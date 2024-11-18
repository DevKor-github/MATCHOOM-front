import { AxiosResponse } from 'axios';
import { z } from 'zod';
import { loginSchema, registerSchema } from 'types/auth';

export type PostLoginRequest = z.infer<typeof loginSchema>;

export type PostLoginResponse = {
  accessToken: string;
  refreshToken: string;
};

export type PostRegisterRequest = z.infer<typeof registerSchema>;

export type PostRegisterResponse = {
  accessToken: string;
  refreshToken: string;
};

export type RefreshAccessTokenResponse = {
  accessToken: string;
};
