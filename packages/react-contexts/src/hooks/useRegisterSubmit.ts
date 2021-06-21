import {useCallback} from 'react';
import useUserRegisterApi from './useUserRegisterApi';

export function useRegisterSubmit(callback: Function|undefined) {
    const [register, {loading, error, ...infos}] = useUserRegisterApi();
    const onSubmit = useCallback(async values => {
        try {
            const data = await register({
                variables: {
                    data: {
                        email: values.email,
                        password: values.password,
                        country: values.country,
                        newsletterSubscribed: values.newsletter_subscribed
                    },
                },
            });

            callback && callback(((data || {}).data || {}).register);
        } catch (e) {
            console.error(e);
        }
    }, [register, callback]);
    return [onSubmit, {loading: Boolean(loading), error: error || false, ...infos}] as [any, any];
}

export default useRegisterSubmit
