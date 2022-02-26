import { useContext } from 'react';
import UploadContext from '../contexts/UploadContext';

export const useUploadContext = () => {
    return useContext(UploadContext);
};

export default useUploadContext;
