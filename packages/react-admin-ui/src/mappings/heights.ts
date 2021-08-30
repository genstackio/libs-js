import clsxmp from '../utils/clsxmp';

export const heights = {
    '0': '',
    '1': 'h-1',
    '2': 'h-2',
    '3': 'h-3',
    xs: 'h-4',
    '4': 'h-4',
    '5': 'h-5',
    '6': 'h-6',
    '7': 'h-7',
    '8': 'h-8',
    '9': 'h-9',
    sm: 'h-10',
    md: 'h-16',
    lg: 'h-20',
    xl: 'h-24',
    '2xl': 'h-30',
    '3xl': 'h-40',
    default: 'h-16',
};

export const heightsValues = Object.keys(heights);

export type height = number | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';

export const defaultHeight = 'default';

export const heightClass = (v: height | undefined, e: any = {}) =>
    clsxmp(String(v as number), defaultHeight, heights, e);

export default heightClass;
