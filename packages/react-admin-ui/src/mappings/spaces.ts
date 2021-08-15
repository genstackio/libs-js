import clsxmp from '../utils/clsxmp';

const spaces = {
    default: '',
    'responsive-col--4': '-space-y-4',
    'responsive-col-0': 'space-y-0',
    'responsive-col-1': 'space-y-1',
    'responsive-col-2': 'space-y-2',
    'responsive-col-3': 'space-y-3',
    'responsive-col-4': 'space-y-4',
    'responsive-col-6': 'space-y-6',
    'responsive-col-14': 'space-y-14',
    'responsive-col-30': 'space-y-0 sm:space-y-3',
    'responsive-col-420': 'space-y-0 sm:space-y-2 md:space-y-4',
    'responsive--4': '-space-y-4 sm:space-y-0 sm:-space-x-4',
    'responsive-0': 'space-y-0 sm:space-x-0',
    'responsive-1': 'space-y-1 sm:space-y-0 sm:space-x-1',
    'responsive-2': 'space-y-2 sm:space-y-0 sm:space-x-2',
    'responsive-3': 'space-y-3 sm:space-y-0 sm:space-x-3',
    'responsive-4': 'space-y-4 sm:space-y-0 sm:space-x-4',
    'responsive-6': 'space-y-6 sm:space-y-0 sm:space-x-6',
    'responsive-14': 'space-y-14 sm:space-y-0 sm:space-x-14',
    'responsive-30': 'space-y-0 sm:space-y-0 sm:space-x-3',
    'responsive-420': 'space-y-0 sm:space-y-0 sm:space-x-2 md:space-x-4',
    'non-responsive-col--4': '-space-y-4',
    'non-responsive-col-0': 'space-y-0',
    'non-responsive-col-1': 'space-y-1',
    'non-responsive-col-2': 'space-y-2',
    'non-responsive-col-3': 'space-y-3',
    'non-responsive-col-4': 'space-y-4',
    'non-responsive-col-6': 'space-y-6',
    'non-responsive-col-14': 'space-y-14',
    'non-responsive-col-30': 'space-y-0 sm:space-y-3',
    'non-responsive-col-420': 'space-y-0 sm:space-y-2 md:space-y-4',
    'non-responsive--4': '-space-x-4',
    'non-responsive-0': 'space-x-0',
    'non-responsive-1': 'space-x-1',
    'non-responsive-2': 'space-x-2',
    'non-responsive-3': 'space-x-3',
    'non-responsive-4': 'space-x-4',
    'non-responsive-6': 'space-x-6',
    'non-responsive-14': 'space-x-14',
    'non-responsive-30': 'space-x-3',
    'non-responsive-420': 'space-x-0 sm:space-x-2 md:space-x-4',
};

export const spaceValues = Object.keys(spaces);

export const spacedValues = [-4, 0, 1, 2, 3, 4, 6, 14, 30, 420];

export type space =
    | 'default'
    | 'responsive-col--4'
    | 'responsive-col-0'
    | 'responsive-col-1'
    | 'responsive-col-2'
    | 'responsive-col-3'
    | 'responsive-col-4'
    | 'responsive-col-6'
    | 'responsive-col-14'
    | 'responsive-col-30'
    | 'responsive-col-420'
    | 'responsive--4'
    | 'responsive-0'
    | 'responsive-1'
    | 'responsive-2'
    | 'responsive-3'
    | 'responsive-4'
    | 'responsive-6'
    | 'responsive-14'
    | 'responsive-30'
    | 'responsive-420'
    | 'non-responsive-col--4'
    | 'non-responsive-col-0'
    | 'non-responsive-col-1'
    | 'non-responsive-col-2'
    | 'non-responsive-col-3'
    | 'non-responsive-col-4'
    | 'non-responsive-col-6'
    | 'non-responsive-col-14'
    | 'non-responsive-col-30'
    | 'non-responsive-col-420'
    | 'non-responsive--4'
    | 'non-responsive-0'
    | 'non-responsive-1'
    | 'non-responsive-2'
    | 'non-responsive-3'
    | 'non-responsive-4'
    | 'non-responsive-6'
    | 'non-responsive-14'
    | 'non-responsive-30'
    | 'non-responsive-420';

export type spaced = false | true | -4 | 0 | 1 | 2 | 3 | 4 | 6 | 14 | 30 | 420 | undefined;

export const defaultSpace = 'default';

export const spaceClass = (
    v: spaced,
    { responsive = false, col = false }: { responsive?: boolean; col?: boolean } = {},
    e: any = {},
) =>
    true === v
        ? 'justify-between'
        : false === v
        ? ''
        : clsxmp(`${responsive ? '' : 'non-'}responsive${col ? '-col' : ''}-${String(v)}`, defaultSpace, spaces, e);

export default spaceClass;
