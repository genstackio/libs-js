import useMutationApi from './useMutationApi';

export const useUserLoginApi = (options: any = {}) =>
    useMutationApi('LOGIN', options)
;

export default useUserLoginApi