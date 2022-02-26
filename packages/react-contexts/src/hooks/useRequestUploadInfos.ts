import {request_upload_infos} from '../types';
import useUploadContext from './useUploadContext';

export function useRequestUploadInfos(): request_upload_infos {
    return useUploadContext().requestUploadInfos;
}

export default useRequestUploadInfos;
