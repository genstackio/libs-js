import {useCallback} from 'react';
import useUserLoginApi from '../hooks/useUserLoginApi';

export function useLoginSubmit(callback: Function|undefined = undefined) {
    const [login, {loading, error, ...infos}] = useUserLoginApi();
    const onSubmit = useCallback(async values => {
        try {
            const data = await login({
                variables: {
                    data: {
                        username: values.email,
                        password: values.password,
                    }
                },
            });
            callback && callback(((data || {}).data || {}).createAuthToken);
        } catch (e) {
            // Do not display errors here because the api sends back data on some login errors
        }
    }, [login, callback]);
    return [onSubmit, {loading: Boolean(loading), error: error || false, ...infos}] as [any, any];
}

export default useLoginSubmit
