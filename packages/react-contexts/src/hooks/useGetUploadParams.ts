import { useCallback } from 'react';
import useRequestUploadInfos from './useRequestUploadInfos';
import useUserContext from './useUserContext';

export const useGetUploadParams = (props: any) => {
    const requestUploadInfos = useRequestUploadInfos();
    const userContext = useUserContext();
    return useCallback(async () => {
        return requestUploadInfos(props, userContext);
    }, [requestUploadInfos, props, userContext]);
};

export default useGetUploadParams;
