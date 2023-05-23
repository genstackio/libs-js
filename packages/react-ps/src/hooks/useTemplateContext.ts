import { useContext } from 'react';
import TemplateContext from '../contexts/TemplateContext';

export function useTemplateContext() {
    return useContext(TemplateContext);
}

export default useTemplateContext;
