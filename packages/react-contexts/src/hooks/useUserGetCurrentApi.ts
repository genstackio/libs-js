import useQueryApi from './useQueryApi';

export const useUserGetCurrentApi = (options: any = {}) => useQueryApi('GET_CURRENT_USER', options);

export default useUserGetCurrentApi;
