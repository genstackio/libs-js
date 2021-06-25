import { useContext } from 'react';
import TailwindContext from '../contexts/TailwindContext';

export const useTailwind = () => {
    return useContext(TailwindContext);
};

export default useTailwind;
