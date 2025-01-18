import { AxiosInstance } from 'axios';
import createAPI from '.';
import _ from 'lodash';
import { hofDetailsDto } from '../utilities/dto/rationCardManagement.dto';

const apiBaseURL: string = import.meta.env.VITE_API_BASE_RATION_CARD_URL;
const personalDetailService: string = import.meta.env
  .VITE_API_BASE_RATION_CARD_PERSONAL_DETAILS_SERVICE;
const othersService: string = import.meta.env
  .VITE_API_BASE_RATION_CARD_OTHERS_SERVICE;
const addressService: string = import.meta.env
  .VITE_API_BASE_RATION_CARD_OTHERS_SERVICE;
const rationCardRegistrationApi: AxiosInstance = createAPI(apiBaseURL);

export const postPersonalDetailsCreateUpdateMember = async <T>(
  reqObj: any
): Promise<any> => {
  try {
    const res: any = await rationCardRegistrationApi.post(
      '/api/v1' + personalDetailService + '/create-update-member',
      reqObj
    );
    return res.data;
  } catch (error) {
    return 'Something went wrong' as T;
  }
};
export const postPersonalDetailsCreateUpdateHof = async <T>(
  reqObj: any
): Promise<any> => {
  try {
    const res: any = await rationCardRegistrationApi.post(
      '/api/v1' + personalDetailService + '/create-update-hof',
      reqObj
    );
    return res.data;
  } catch (error) {
    return 'Something went wrong' as T;
  }
};
export const getPersonalDetailsHofById = async <T>(
  id: string
): Promise<any> => {
  try {
    const res: any = await rationCardRegistrationApi.get(
      '/api/v1' + personalDetailService + '/get-member-details',
      {
        params: {
          rcId: id,
        },
      }
    );
    debugger;
    const resData = res.data.find((resData: any) => resData.hof);
    if (_.isEmpty(resData)) {
      return null;
    }
    return hofDetailsDto(resData);
  } catch (error) {
    return 'Something went wrong' as T;
  }
};
export const getPersonalDetailsMemberDetailsById = async <T>(
  id: string
): Promise<any> => {
  try {
    const res: any = await rationCardRegistrationApi.get(
      '/api/v1' + personalDetailService + '/get-member-details',
      {
        params: {
          rcId: id,
        },
      }
    );
    debugger;
    return res.data.filter((resData: any) => !resData.hof);
  } catch (error) {
    return 'Something went wrong' as T;
  }
};
export const getPersonalDetailsAll = async <T>(
  isActive: boolean
): Promise<T> => {
  try {
    const res: T = await rationCardRegistrationApi.post(
      '/api/v1' + personalDetailService + '/get-all',
      {
        params: {
          isActive,
        },
      }
    );
    return res;
  } catch (error) {
    return 'Something went wrong' as T;
  }
};
export const getPersonalDetailsGetDetails = async <T>(
  isActive: boolean
): Promise<any> => {
  try {
    const res: T = await rationCardRegistrationApi.post(
      '/api/v1' + personalDetailService + '/get-all',
      {
        params: {
          isActive,
        },
      }
    );
    return res;
  } catch (error) {
    return 'Something went wrong' as T;
  }
};

export const postOthersCreateUpdate = async <T>(reqObj: any): Promise<T> => {
  try {
    const res: T = await rationCardRegistrationApi.post(
      '/api/v1' + othersService + '/create-update',
      reqObj
    );
    return res;
  } catch (error) {
    return 'Something went wrong' as T;
  }
};
export const postAddressCreateUpdate = async <T>(reqObj: any): Promise<T> => {
  try {
    const res: T = await rationCardRegistrationApi.post(
      '/api/v1' + addressService + '/create-update',
      reqObj
    );
    return res;
  } catch (error) {
    return 'Something went wrong' as T;
  }
};

// /api/v1/address/create-update

export default {
  postPersonalDetailsCreateUpdateMember,
  postOthersCreateUpdate,
  postAddressCreateUpdate,
  getPersonalDetailsHofById,
};
