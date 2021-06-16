import {createContext} from "react";
import createDefaultNavigationContextValue from '../utils/createDefaultNavigationContextValue';
const NavigationContext = createContext(createDefaultNavigationContextValue())
export const NavigationProvider = NavigationContext.Provider;
export const NavigationConsumer = NavigationContext.Consumer;
NavigationContext.displayName = 'NavigationContext';
export default NavigationContext