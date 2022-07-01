import { useContext } from 'react';
import BreadcrumbsFactoryContext from '../contexts/BreadcrumbsFactoryContext';

export const useBreadcrumbsFactory = () => {
    return useContext(BreadcrumbsFactoryContext);
};

export default useBreadcrumbsFactory;
