import { useContext } from 'react';
import AmbianceContext from '../contexts/AmbianceContext';

export const useAmbiance = () => {
    return useContext(AmbianceContext);
};

export default useAmbiance;
