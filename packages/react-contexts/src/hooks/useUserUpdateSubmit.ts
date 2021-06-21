import {useCallback} from 'react';
import useUserUpdateApi from "./useUserUpdateApi";

export function useUserUpdateSubmit(callback: Function|undefined = undefined) {
    const [update, {loading, error, ...infos}] = useUserUpdateApi();
    const onSubmit = useCallback(async values => {
        try {
            const data = await update({
                variables: {
                    data: {
                        firstName: values.firstName,
                        lastName: values.lastName,
                    },
                },
            });
            callback && callback(data);
        } catch (e) {
            console.error(e);
        }
    }, [update, callback]);
    return [onSubmit, {loading: Boolean(loading), error: error || false, ...infos}] as [any, any];
}

export default useUserUpdateSubmit