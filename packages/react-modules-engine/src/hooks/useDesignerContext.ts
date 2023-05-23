import { useContext } from 'react';
import DesignerContext from '../contexts/DesignerContext';

export function useDesignerContext() {
    return useContext(DesignerContext);
}

export default useDesignerContext;
