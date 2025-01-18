// http://10.202.174.69:8081/api/v1/auth/login

import { AxiosInstance } from 'axios';
import createAPI from '.';

const apiBaseURL: string =
  import.meta.env.VITE_API_BASE_LOGIN_SERVICE || 'http://10.202.174.69:8081';
const authServices: string = import.meta.env.VITE_API_AUTH_SERVICE || 'auth';

const authApi: AxiosInstance = createAPI(apiBaseURL);
export const postLogin = async <T>(reqObj: any): Promise<any> => {
  try {
    const res: any = await authApi.post(
      '/api/v1/' + authServices + '/login',
      reqObj
    );
    return res;
  } catch (error) {
    return 'Something went wrong' as T;
  }
};
