import { AxiosError } from 'axios';
import { useLayoutEffect } from 'react';
import { authInstance } from 'services/config';

const useAxiosInterceptor = () => {
  // const router = useRouter();
  // const { getAuth, removeAuth } = useAuth();
  // const { accessToken } = getAuth();

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
