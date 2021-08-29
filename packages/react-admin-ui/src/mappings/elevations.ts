import clsxmp from '../utils/clsxmp';

export const elevations = {
    '0': '',
    '1': 'shadow-sm',
    '2': 'shadow',
    '3': 'shadow-md',
    '4': 'shadow-lg',
    '5': 'shadow-xl',
    '6': 'shadow-2xl',
    '7': 'shadow-block',
    '8': 'shadow-upper-block',
};

export const elevationValues = Object.keys(elevations);

export type elevation = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export const defaultElevation = 1;

export const elevationClass = (v: elevation | undefined, e: any = {}) =>
    clsxmp(`${v}`, `${defaultElevation}`, elevations, e);

export default elevationClass;
