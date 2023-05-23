import { useContext } from 'react';
import PlatformContext from '../contexts/PlatformContext';

export function usePlatformContext() {
    return useContext(PlatformContext);
}

export default usePlatformContext;
