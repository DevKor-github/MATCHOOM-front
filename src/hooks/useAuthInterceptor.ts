import { AxiosError } from 'axios';
import { useLayoutEffect } from 'react';
import { authInstance } from 'services/config';

const useAxiosInterceptor = () => {
  // TODO: 토큰 관리 로직으로 바꾸기
  const accessToken = 'ACCESS_TOKEN';

  useLayoutEffect(() => {
    if (!accessToken) {
      return;
    }

    const requestInterceptor = authInstance.interceptors.request.use(
      (config) => {
        config.headers.Authorization = `Bearer ${accessToken}`;
        return config;
      },
    );

    const responseInterceptor = authInstance.interceptors.response.use(
      (res) => res,
      (error: AxiosError) => {
        console.error(error);

        if (error.status === 401) {
          // TODO: access token 재발급 로직 구현하기
          console.error('토큰이 만료되었습니다.');
        }
      },
    );

    return () => {
      authInstance.interceptors.request.eject(requestInterceptor);
      authInstance.interceptors.response.eject(responseInterceptor);
    };
  }, [accessToken]);
};

export default useAxiosInterceptor;
