import { createContext } from 'react';
import createDefaultFavoritesContextValue from '../utils/createDefaultFavoritesContextValue';
const FavoritesContext = createContext(createDefaultFavoritesContextValue());
export const FavoritesProvider = FavoritesContext.Provider;
export const FavoritesConsumer = FavoritesContext.Consumer;
FavoritesContext.displayName = 'FavoritesContext';
export default FavoritesContext;
