import preset from '../preset';

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

export const spaceClass = (
    v: spaced,
    { responsive = false, col = false }: { responsive?: boolean; col?: boolean } = {},
    e: any = {},
) =>
    true === v
        ? 'justify-between'
        : false === v
        ? ''
        : preset.classes('space', `${responsive ? '' : 'non-'}responsive${col ? '-col' : ''}-${String(v)}`, e);

export default spaceClass;
