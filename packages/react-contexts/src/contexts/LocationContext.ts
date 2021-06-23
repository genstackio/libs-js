import { createContext } from 'react';
import createDefaultLocationContextValue from '../utils/createDefaultLocationContextValue';
const LocationContext = createContext(createDefaultLocationContextValue());
export const LocationProvider = LocationContext.Provider;
export const LocationConsumer = LocationContext.Consumer;
LocationContext.displayName = 'LocationContext';
export default LocationContext;
