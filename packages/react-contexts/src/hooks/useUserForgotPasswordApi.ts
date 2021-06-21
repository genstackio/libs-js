import useMutationApi from './useMutationApi';

export const useUserForgotPasswordApi = (options: any = {}) =>
    useMutationApi('FORGOT_PASSWORD', options)
;

export default useUserForgotPasswordApi