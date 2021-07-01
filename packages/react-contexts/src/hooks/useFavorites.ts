import { useContext } from 'react';
import FavoritesContext from '../contexts/FavoritesContext';
import { favorites_context_value } from '../types';

export const useFavorites = (): favorites_context_value => {
    return useContext(FavoritesContext);
};

export default useFavorites;
