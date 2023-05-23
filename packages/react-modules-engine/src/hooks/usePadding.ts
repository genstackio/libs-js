import { useMemo } from 'react';
import clsx from 'clsx';

const defaultPadding = 'md';

const paddings = {
    none: {
        common: {
            xs: 'space-y-2 sm:space-y-4',
            sm: 'space-y-4 sm:space-y-8',
            md: 'space-y-6 sm:space-y-10',
            lg: 'space-y-8 sm:space-y-14',
            xl: 'space-y-10 sm:space-y-20',
        },
        first: {
            xs: '',
            sm: '',
            md: '',
            lg: '',
            xl: '',
        },
        middle: {
            xs: 'mt-2 sm:mt-4',
            sm: 'mt-4 sm:mt-8',
            md: 'mt-6 sm:mt-10',
            lg: 'mt-8 sm:mt-14',
            xl: 'mt-10 sm:mt-20',
        },
        last: {
            xs: 'mt-2 sm:mt-4',
            sm: 'mt-4 sm:mt-8',
            md: 'mt-6 sm:mt-10',
            lg: 'mt-8 sm:mt-14',
            xl: 'mt-10 sm:mt-20',
        },
    },
    all: {
        common: {
            xs: 'px-1 sm:px-8 md:px-16 lg:px-24 space-y-2 sm:space-y-4',
            sm: 'px-2 sm:px-12 md:px-24 lg:px-36 space-y-4 sm:space-y-6',
            md: 'px-4 sm:px-16 md:px-32 lg:px-48 space-y-6 sm:space-y-10',
            lg: 'px-6 sm:px-20 md:px-40 lg:px-60 space-y-8 sm:space-y-14',
            xl: 'px-8 sm:px-24 md:px-48 lg:px-72 space-y-10 sm:space-y-20',
        },
        first: {
            xs: '',
            sm: '',
            md: '',
            lg: '',
            xl: '',
        },
        middle: {
            xs: 'mt-2 sm:mt-4',
            sm: 'mt-4 sm:mt-8',
            md: 'mt-6 sm:mt-10',
            lg: 'mt-8 sm:mt-14',
            xl: 'mt-10 sm:mt-20',
        },
        last: {
            xs: 'mt-2 sm:mt-4',
            sm: 'mt-4 sm:mt-8',
            md: 'mt-6 sm:mt-10',
            lg: 'mt-8 sm:mt-14',
            xl: 'mt-10 sm:mt-20',
        },
    },
    left: {
        common: {
            xs: 'pr-1 sm:pr-0 pl-1 sm:pl-8 md:pl-16 lg:pl-24 space-y-2 sm:space-y-4',
            sm: 'pr-2 sm:pr-0 pl-2 sm:pl-12 md:pl-24 lg:pl-36 space-y-4 sm:space-y-6',
            md: 'pr-4 sm:pr-0 pl-4 sm:pl-16 md:pl-32 lg:pl-48 space-y-6 sm:space-y-10',
            lg: 'pr-6 sm:pr-0 pl-6 sm:pl-20 md:pl-40 lg:pl-60 space-y-8 sm:space-y-14',
            xl: 'pr-8 sm:pr-0 pl-8 sm:pl-24 md:pl-48 lg:pl-72 space-y-10 sm:space-y-20',
        },
        first: {
            xs: '',
            sm: '',
            md: '',
            lg: '',
            xl: '',
        },
        middle: {
            xs: 'mt-2 sm:mt-4',
            sm: 'mt-4 sm:mt-8',
            md: 'mt-6 sm:mt-10',
            lg: 'mt-8 sm:mt-14',
            xl: 'mt-10 sm:mt-20',
        },
        last: {
            xs: 'mt-2 sm:mt-4',
            sm: 'mt-4 sm:mt-8',
            md: 'mt-6 sm:mt-10',
            lg: 'mt-8 sm:mt-14',
            xl: 'mt-10 sm:mt-20',
        },
    },
    right: {
        common: {
            xs: 'pl-1 sm:pr-0 pr-1 sm:pr-8 md:pr-16 lg:pr-24 space-y-2 sm:space-y-4',
            sm: 'pl-2 sm:pr-0 pr-2 sm:pr-12 md:pr-24 lg:pr-36 space-y-4 sm:space-y-6',
            md: 'pl-4 sm:pr-0 pr-4 sm:pr-16 md:pr-32 lg:pr-48 space-y-6 sm:space-y-10',
            lg: 'pl-6 sm:pr-0 pr-6 sm:pr-20 md:pr-40 lg:pr-60 space-y-8 sm:space-y-14',
            xl: 'pl-8 sm:pr-0 pr-8 sm:pr-24 md:pr-48 lg:pr-72 space-y-10 sm:space-y-20',
        },
        first: {
            xs: '',
            sm: '',
            md: '',
            lg: '',
            xl: '',
        },
        middle: {
            xs: 'mt-2 sm:mt-4',
            sm: 'mt-4 sm:mt-8',
            md: 'mt-6 sm:mt-10',
            lg: 'mt-8 sm:mt-14',
            xl: 'mt-10 sm:mt-20',
        },
        last: {
            xs: 'mt-2 sm:mt-4',
            sm: 'mt-4 sm:mt-8',
            md: 'mt-6 sm:mt-10',
            lg: 'mt-8 sm:mt-14',
            xl: 'mt-10 sm:mt-20',
        },
    },
};

export function usePadding({
    paddingMode = 'all',
    first = false,
    last = false,
    middle = false,
    padding = undefined,
}: any) {
    padding = padding || defaultPadding;
    const classes = useMemo(
        () =>
            [
                paddings[paddingMode]['common'][padding || ''],
                first && paddings[paddingMode]['first'][padding || ''],
                last && paddings[paddingMode]['last'][padding || ''],
                middle && paddings[paddingMode]['middle'][padding || ''],
            ].filter((x) => !!x),
        [padding, first, last, middle, paddingMode],
    );

    return clsx(...classes);
}

export default usePadding;
