import { useContext } from 'react';
import TemplatesContext from '../contexts/TemplatesContext';

export function useTemplatesContext() {
    return useContext(TemplatesContext);
}

export default useTemplatesContext;
