import EncryptedStorage from 'react-native-encrypted-storage';

const REFRESH_TOKEN = 'refresh-token';
const ACCESS_TOKEN = 'access-token';

export const setRefreshToken = async (value: string) => {
  await EncryptedStorage.setItem(REFRESH_TOKEN, value);
};

export const setAccessToken = async (value: string) => {
  await EncryptedStorage.setItem(ACCESS_TOKEN, value);
};

export const getRefreshToken = async () => {
  return await EncryptedStorage.getItem(REFRESH_TOKEN);
};

export const getAccessToken = async () => {
  return await EncryptedStorage.getItem(ACCESS_TOKEN);
};

export const deleteRefreshToken = async () => {
  await EncryptedStorage.removeItem(REFRESH_TOKEN);
};

export const deleteAccessToken = async () => {
  await EncryptedStorage.removeItem(ACCESS_TOKEN);
};
