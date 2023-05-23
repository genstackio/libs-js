import { useContext } from 'react';
import AlreadyInContainerContext from '../contexts/AlreadyInContainerContext';

export function useAlreadyInContainerContext() {
    return useContext(AlreadyInContainerContext);
}

export default useAlreadyInContainerContext;
