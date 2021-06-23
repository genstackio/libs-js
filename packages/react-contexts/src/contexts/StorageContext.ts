import { createContext } from 'react';
import createDefaultStorageContextValue from '../utils/createDefaultStorageContextValue';
const StorageContext = createContext(createDefaultStorageContextValue());
export const StorageProvider = StorageContext.Provider;
export const StorageConsumer = StorageContext.Consumer;
StorageContext.displayName = 'StorageContext';
export default StorageContext;
