import { createContext } from 'react';
import createDefaultFullscreenContextValue from '../utils/createDefaultFullscreenContextValue';
const FullscreenContext = createContext(createDefaultFullscreenContextValue());
export const FullscreenProvider = FullscreenContext.Provider;
export const FullscreenConsumer = FullscreenContext.Consumer;
FullscreenContext.displayName = 'FullscreenContext';
export default FullscreenContext;
