import useQueryApi from './useQueryApi';

const defaultOptions = {};

export const useUserGetCurrentApi = (options: any = defaultOptions) => useQueryApi('GET_CURRENT_USER', options);

export default useUserGetCurrentApi;
