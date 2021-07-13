import clsxmp from '../utils/clsxmp';

export const textSizes = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-base',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl',
    '5xl': 'text-5xl',
    '6xl': 'text-6xl',
    '7xl': 'text-7xl',
    '8xl': 'text-8xl',
    '9xl': 'text-9xl',
};

export const textSizeValues = Object.keys(textSizes);

export type text_size =
    | 'xs'
    | 'sm'
    | 'md'
    | 'base'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl'
    | '7xl'
    | '8xl'
    | '9xl';

export const defaultTextSize = 'base';

export const textSizeClass = (v: text_size | undefined, e: any = {}) => clsxmp(v, defaultTextSize, textSizes, e);

export default textSizeClass;
