import {useCallback} from 'react';
import useUserForgotPasswordApi from '../hooks/useUserForgotPasswordApi';

export function useForgotPasswordSubmit(callback: Function|undefined = undefined) {
    const [forgotPassword, {loading, error, ...infos}] = useUserForgotPasswordApi();
    const onSubmit = useCallback(async values => {
        try {
            const data = await forgotPassword({
                variables: {
                    data: {
                        email: values.email,
                    },
                },
            });
            callback && callback(((data || {}).data || {}).forgotPassword);
        } catch (e) {
            console.error(e);
        }
    }, [forgotPassword, callback]);
    return [onSubmit, {loading: Boolean(loading), error: error || false, ...infos}] as [any, any];
}

export default useForgotPasswordSubmit