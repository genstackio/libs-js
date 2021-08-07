import clsxmp from '../utils/clsxmp';

export const gridCols = {
    '0': 'grid-cols-none',
    '1': 'grid-cols-1',
    '2': 'grid-cols-2',
    '3': 'grid-cols-3',
    '4': 'grid-cols-4',
    '5': 'grid-cols-5',
    '6': 'grid-cols-6',
    '7': 'grid-cols-7',
    '8': 'grid-cols-8',
    '9': 'grid-cols-9',
    '10': 'grid-cols-10',
    '11': 'grid-cols-11',
    '12': 'grid-cols-12',
    default: 'grid-cols-none',
};

export const gridColsValues = Object.keys(gridCols);

export type grid_cols = number;

export const defaultGridCols = 'default';

export const gridColsClass = (v: grid_cols | undefined, e: any = {}) =>
    clsxmp(String((v as number) % 12), defaultGridCols, gridCols, e);

export default gridColsClass;
