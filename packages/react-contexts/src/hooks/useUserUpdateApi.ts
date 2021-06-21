import useMutationApi from './useMutationApi';

export const useUserUpdateApi = (options: any = {}) =>
    useMutationApi('USER_UPDATE', options)
;

export default useUserUpdateApi