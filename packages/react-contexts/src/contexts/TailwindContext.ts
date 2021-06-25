import { createContext } from 'react';
import createDefaultTailwindContextValue from '../utils/createDefaultTailwindContextValue';
const TailwindContext = createContext(createDefaultTailwindContextValue());
export const TailwindProvider = TailwindContext.Provider;
export const TailwindConsumer = TailwindContext.Consumer;
TailwindContext.displayName = 'TailwindContext';
export default TailwindContext;
