import { createContext } from 'react';
import createDefaultSectionsContextValue from '../utils/createDefaultSectionsContextValue';
const SectionsContext = createContext(createDefaultSectionsContextValue());
export const SectionsProvider = SectionsContext.Provider;
export const SectionsConsumer = SectionsContext.Consumer;
SectionsContext.displayName = 'SectionsContext';
export default SectionsContext;
