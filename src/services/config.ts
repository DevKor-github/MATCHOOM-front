import axios from 'axios';
import Config from 'react-native-config';

export const instance = axios.create({
  baseURL: Config.API_KEY,
  timeout: 20000,
});

export const authInstance = axios.create({
  baseURL: Config.API_KEY,
  timeout: 20000,
});
