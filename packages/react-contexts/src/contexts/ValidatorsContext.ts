import { createContext } from 'react';
import createDefaultValidatorsContextValue from '../utils/createDefaultValidatorsContextValue';
const ValidatorsContext = createContext(createDefaultValidatorsContextValue());
export const ValidatorsProvider = ValidatorsContext.Provider;
export const ValidatorsConsumer = ValidatorsContext.Consumer;
ValidatorsContext.displayName = 'ValidatorsContext';
export default ValidatorsContext;
