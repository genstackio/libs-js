import { createContext } from 'react';
import createDefaultUploadContextValue from '../utils/createDefaultUploadContextValue';
const UploadContext = createContext(createDefaultUploadContextValue());
export const UploadProvider = UploadContext.Provider;
export const UploadConsumer = UploadContext.Consumer;
UploadContext.displayName = 'UploadContext';
export default UploadContext;
