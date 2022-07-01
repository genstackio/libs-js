import { useContext } from 'react';
import MenusFactoryContext from '../contexts/MenusFactoryContext';

export const useMenusFactory = () => {
    return useContext(MenusFactoryContext);
};

export default useMenusFactory;
