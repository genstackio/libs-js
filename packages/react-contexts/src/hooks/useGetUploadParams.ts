import {useCallback} from 'react';
import useRequestUploadInfos from "./useRequestUploadInfos";

export const useGetUploadParams = (props: any) => {
    const requestUploadInfos = useRequestUploadInfos();
    return useCallback(async () => {
        return requestUploadInfos(props)
    }, [requestUploadInfos, props]);
};

export default useGetUploadParams;
