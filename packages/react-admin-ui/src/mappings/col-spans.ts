import clsxmp from '../utils/clsxmp';

export const colSpans = {
    '0': 'col-span-full',
    '1': 'col-span-1',
    '2': 'col-span-1 sm:col-span-2',
    '3': 'col-span-1 sm:col-span-3',
    '4': 'col-span-1 sm:col-span-4',
    '5': 'col-span-1 sm:col-span-5',
    '6': 'col-span-1 sm:col-span-4 md:col-span-6',
    '7': 'col-span-1 sm:col-span-5 md:col-span-7',
    '8': 'col-span-1 sm:col-span-4 md:col-span-8',
    '9': 'col-span-1 sm:col-span-5 md:col-span-9',
    '10': 'col-span-1 sm:col-span-4 md:col-span-10',
    '11': 'col-span-1 sm:col-span-5 md:col-span-11',
    '12': 'col-span-1 sm:col-span-4 md:col-span-12',
    '64': 'col-span-4 sm:col-span-6',
    default: 'col-auto',
};

export const colSpanValues = Object.keys(colSpans);

export type col_span = number;

export const defaultColSpan = 'default';

export const colSpanClass = (v: col_span | undefined, e: any = {}) =>
    clsxmp(String(undefined === v ? 'default' : (v as number)), defaultColSpan, colSpans, e);

export default colSpanClass;
