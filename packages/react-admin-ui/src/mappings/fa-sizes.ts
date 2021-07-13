export const faSizes: { [key: string]: fa_size } = {
    xs: 'xs',
    sm: 'sm',
    md: 'lg',
    base: 'lg',
    lg: 'lg',
    xl: '2x',
    '2xl': '2x',
    '3xl': '3x',
    '4xl': '3x',
    '5xl': '5x',
    '6xl': '5x',
    '7xl': '7x',
    '8xl': '7x',
    '9xl': '10x',
};

export const faSizeValues = Object.values(faSizes);

export type fa_size = 'xs' | 'sm' | 'lg' | '2x' | '3x' | '5x' | '7x' | '10x';

export const mapFaSize = (s) => faSizes[s || defaultFaSize] || faSizes[defaultFaSize];

export const defaultFaSize = 'base';
