import { createContext } from 'react';

export const PlatformContext = createContext<{ env: string }>({ env: 'prod' });
export const PlatformContextProvider = PlatformContext.Provider;
export const PlatformContextConsumer = PlatformContext.Consumer;
export default PlatformContext;
