import { useContext } from 'react';
import ContentComponentsContext from '../contexts/ContentComponentsContext';

export function useContentComponentsContext() {
    return useContext(ContentComponentsContext);
}

export default useContentComponentsContext;
