import axios from 'axios';
import Config from 'react-native-config';
import {
  deleteAccessToken,
  deleteRefreshToken,
  getAccessToken,
  setAccessToken,
} from 'utils/handleToken';
import { refreshAccessToken } from './auth/api';

export const instance = axios.create({
  baseURL: Config.API_KEY,
  timeout: 20000,
});

const handleLogout = async () => {
  await deleteAccessToken();
  await deleteRefreshToken();
};

const handleTokenRefresh = async () => {
  try {
    const response = await refreshAccessToken();
    await setAccessToken(response.accessToken);
    return true;
  } catch (error) {
    console.error('Token refresh failed:', error);
    await handleLogout();
    return false;
  }
};

instance.interceptors.request.use(
  async (config) => {
    const token = await getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      const isRefreshSuccess = await handleTokenRefresh();
      if (isRefreshSuccess) {
        const token = await getAccessToken();
        error.config.headers.Authorization = `Bearer ${token}`;
        return instance(error.config);
      }
    }
    return Promise.reject(error);
  },
);
