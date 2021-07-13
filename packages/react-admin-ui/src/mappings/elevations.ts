import clsxmp from '../utils/clsxmp';

export const elevations = {
    '0': '',
    '1': 'shadow-block',
    '2': 'shadow-upper-block',
};

export const elevationValues = Object.keys(elevations);

export type elevation = 0 | 1 | 2;

export const defaultElevation = 1;

export const elevationClass = (v: elevation | undefined, e: any = {}) =>
    clsxmp(`${v}`, `${defaultElevation}`, elevations, e);

export default elevationClass;
