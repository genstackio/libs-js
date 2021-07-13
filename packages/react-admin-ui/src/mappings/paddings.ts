import clsxmp from '../utils/clsxmp';

export const paddings = {
    none: '',
    default: 'p-10',
    small: 'x-p-small',
    xsmall: 'p-4',
};

export const paddingValues = Object.keys(paddings);

export type padding = 'none' | 'default' | 'small' | 'xsmall';

export const defaultPadding = 'none';

export const paddingClass = (v: padding | undefined, e: any = {}) => clsxmp(v, defaultPadding, paddings, e);

export default paddingClass;
