import { favorites_context_value } from '../types';

export const createDefaultFavoritesContextValue = (
    defaultValue: favorites_context_value | undefined = undefined,
): favorites_context_value => defaultValue || { favorites: [] };

export default createDefaultFavoritesContextValue;
