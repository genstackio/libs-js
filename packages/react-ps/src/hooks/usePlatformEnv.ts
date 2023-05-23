import { useContext } from 'react';
import PlatformContext from '../contexts/PlatformContext';

export function usePlatformEnv() {
    return useContext(PlatformContext).env;
}

export default usePlatformEnv;
