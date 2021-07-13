import clsxmp from '../utils/clsxmp';

export const dividerSizes = {
    xs: 'h-1',
    sm: 'h-2',
    md: 'h-3',
    lg: 'h-4',
    xl: 'h-6',
    default: 'h-1',
};

export const dividerSizeValues = Object.keys(dividerSizes);

export type divider_size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'default';

export const defaultDividerSize = 'default';

export const dividerSizeClass = (v: divider_size | undefined, e: any = {}) =>
    clsxmp(v, defaultDividerSize, dividerSizes, e);

export default dividerSizeClass;
