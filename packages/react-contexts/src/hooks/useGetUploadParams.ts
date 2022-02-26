import {useCallback} from 'react';
import useRequestUploadInfos from "./useRequestUploadInfos";

export const useGetUploadParams = (props: any) => {
    const requestUploadInfos = useRequestUploadInfos();
    return useCallback(async ({ meta: { name } }) => {
        return requestUploadInfos({name, type: props.kind})
    }, [requestUploadInfos, props.kind]);
};

export default useGetUploadParams;
