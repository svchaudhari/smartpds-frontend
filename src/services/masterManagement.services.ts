import { AxiosInstance } from 'axios';
import createAPI from '.';

const apiBaseURL: string = import.meta.env
  .VITE_API_BASE_MASTER_MANAGEMENT_SERVICE;
const stateControllerServices: string = import.meta.env
  .VITE_API_BASE_MASTER_MANAGEMENT_STATE_SERVICE;

const masterMangementApi: AxiosInstance = createAPI(apiBaseURL);

export const postCreateState = async <T>(reqObj: any): Promise<any> => {
  try {
    const res: any = await masterMangementApi.post(
      '/api/v1' + stateControllerServices + '/create-update',
      reqObj
    );
    return res.data;
  } catch (error) {
    return 'Something went wrong' as T;
  }
};
export const getStateById = async <T>(id: string | number): Promise<any> => {
  try {
    const res: any = await masterMangementApi.get(
      '/api/v1' + stateControllerServices + '/get?id=' + id
    );
    return res.data;
  } catch (error) {
    return 'Something went wrong' as T;
  }
};
export const getAllState = async <T>(isActive: boolean): Promise<any> => {
  try {
    const res: any = await masterMangementApi.get(
      '/api/v1' + stateControllerServices + '/get-all?isActive=' + isActive
    );
 
    return res.data;
  } catch (error) {
    return 'Something went wrong' as T;
  }
};
export const deleteStateById = async <T>(id: string | number): Promise<any> => {
  try {
    const res: any = await masterMangementApi.delete(
      '/api/v1' + stateControllerServices + '/delete?id=' + id
    );
    return res.data;
  } catch (error) {
    return 'Something went wrong' as T;
  }
};
