import clsxmp from '../utils/clsxmp';

export const textVariants = {
    xsmall: 'text-xxs font-small',
    small: 'text-xs font-small',
    body: 'text-base font-body',
    text: 'text-base font-body',
    section: 'text-base font-body font-medium tracking-wide leading-tight',
    cross: 'text-base line-through',
    description: 'text-sm font-description',
    overline: 'text-sm font-overline',
    subsection: 'text-sm font-subsection font-medium',
    subtitle: 'text-lg font-light font-subtitle',
    title0: 'lg:text-9xl md:text-7xl sm:text-4xl font-bold font-title1',
    title1: 'text-6xl font-bold font-title1',
    title2: 'text-5xl font-bold font-title2',
    title3: 'text-4xl font-bold font-title3',
    title4: 'text-3xl font-bold font-title4',
    title5: 'text-2xl font-bold font-title5',
    title6: 'text-xl font-bold font-title6',
    title7: 'text-xxl xs:text-9xl font-bold font-title7 -mt-12 -mb-8 xs:m-0',
    underline: 'text-base underline font-underline',
};

export type text_variant =
    | 'xsmall'
    | 'small'
    | 'body'
    | 'section'
    | 'cross'
    | 'description'
    | 'overline'
    | 'subsection'
    | 'subtitle'
    | 'text'
    | 'title0'
    | 'title1'
    | 'title2'
    | 'title3'
    | 'title4'
    | 'title5'
    | 'title6'
    | 'title7'
    | 'underline';

export const defaultTextVariant = 'body';

export const textVariantClass = (v: text_variant | undefined, e: any = {}) =>
    clsxmp(v, defaultTextVariant, textVariants, e);

export default textVariantClass;
