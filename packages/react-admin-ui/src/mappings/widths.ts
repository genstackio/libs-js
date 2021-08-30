import clsxmp from '../utils/clsxmp';

export const widths = {
    '0': '',
    '1': 'w-1',
    '2': 'w-2',
    '3': 'w-3',
    xs: 'w-4',
    '4': 'w-4',
    '5': 'w-5',
    '6': 'w-6',
    '7': 'w-7',
    '8': 'w-8',
    '9': 'w-9',
    sm: 'w-10',
    md: 'w-16',
    lg: 'w-20',
    xl: 'w-24',
    '2xl': 'w-30',
    '3xl': 'w-40',
    default: 'w-16',
};

export const widthsValues = Object.keys(widths);

export type width = number | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';

export const defaultWidth = 'default';

export const widthClass = (v: width | undefined, e: any = {}) => clsxmp(String(v as number), defaultWidth, widths, e);

export default widthClass;
