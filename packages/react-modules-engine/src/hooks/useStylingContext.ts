import { useContext } from 'react';
import StylingContext from '../contexts/StylingContext';

export function useStylingContext() {
    return useContext(StylingContext);
}

export default useStylingContext;
