import { createContext } from 'react';
import createDefaultImagesContextValue from '../utils/createDefaultImagesContextValue';
const ImagesContext = createContext(createDefaultImagesContextValue());
export const ImagesProvider = ImagesContext.Provider;
export const ImagesConsumer = ImagesContext.Consumer;
ImagesContext.displayName = 'ImagesContext';
export default ImagesContext;
