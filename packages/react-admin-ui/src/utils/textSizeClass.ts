import clsxm from './clsxm';
import { clsxm_params } from '../types';

export const styles = {
    common: {
        'xs': 'text-xs',
        'sm': 'text-sm',
        'md': 'text-md',
        'lg': 'text-lg',
        'xl': 'text-2xl',
    },
};

export const textSizeClass = (params: clsxm_params) => clsxm(params, styles, ['size']);

export default textSizeClass;
