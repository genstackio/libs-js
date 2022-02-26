import {useCallback} from 'react';
import useRequestUploadInfos from "./useRequestUploadInfos";

export const useGetUploadParams = (props: any) => {
    const requestUploadInfos = useRequestUploadInfos();
    return useCallback(async ({ meta: { name } }) => {
        return requestUploadInfos({defaultValues: props.defaultValues, name, type: props.kind})
    }, [requestUploadInfos, props.kind, props.defaultValues]);
};

export default useGetUploadParams;
