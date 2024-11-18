import { useCallback } from 'react';
import {
  deleteAccessToken,
  deleteRefreshToken,
  setAccessToken,
} from 'utils/handleToken';
import { refreshAccessToken } from 'services/auth/api';

export const useAuth = () => {
  const logout = useCallback(async () => {
    await deleteAccessToken();
    await deleteRefreshToken();
  }, []);

  const handleTokenRefresh = useCallback(async () => {
    try {
      const response = await refreshAccessToken();
      await setAccessToken(response.accessToken);
      return true;
    } catch (error) {
      console.error('Token refresh failed:', error);
      await logout();
      return false;
    }
  }, [logout]);

  return { logout, handleTokenRefresh };
};
