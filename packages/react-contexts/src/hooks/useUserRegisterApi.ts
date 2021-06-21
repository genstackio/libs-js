import useMutationApi from './useMutationApi';

export const useUserRegisterApi = (options: any = {}) =>
    useMutationApi('REGISTER', options)
;

export default useUserRegisterApi