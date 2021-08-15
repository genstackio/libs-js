import clsxmp from '../utils/clsxmp';

export const gaps = {
    '0': '',
    '1': 'gap-1',
    '2': 'gap-1 sm:gap-2',
    '3': 'gap-1 sm:gap-3',
    '4': 'gap-2 sm:gap-4',
    '5': 'gap-2 sm:gap-5',
    '6': 'gap-2 sm:gap-6',
    '7': 'gap-3 sm:gap-7',
    '8': 'gap-4 sm:gap-8',
    '9': 'gap-5 sm:gap-9',
    '10': 'gap-6 sm:gap-10',
    '11': 'gap-7 sm:gap-11',
    '12': 'gap-8 sm:gap-12',
    '64': 'gap-32 sm:gap-64',
    default: 'gap-1 sm:gap-2',
};

export const gapsValues = Object.keys(gaps);

export type gap = number;

export const defaultGap = 'default';

export const gapClass = (v: gap | undefined, e: any = {}) => clsxmp(String(v as number), defaultGap, gaps, e);

export default gapClass;
