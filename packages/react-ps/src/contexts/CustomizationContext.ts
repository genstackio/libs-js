import { createContext } from 'react';

export const CustomizationContext = createContext<{ tenant?: string; theme?: string }>({
    tenant: 'default',
    theme: 'default',
});
export const CustomizationContextProvider = CustomizationContext.Provider;
export const CustomizationContextConsumer = CustomizationContext.Consumer;
export default CustomizationContext;
