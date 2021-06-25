import clsxmp from '../utils/clsxmp';

export const ratingVariants = {
    units: '',
    plates: '',
    'labelled-squares': '',
    pill: '',
    squares: '',
    'reverse-squares': '',
    'small-stars': '',
    stack: '',
    stars: '',
    basic: '',
    mood: '',
};

export type rating_variant =
    | 'units'
    | 'plates'
    | 'labelled-squares'
    | 'pill'
    | 'squares'
    | 'reverse-squares'
    | 'small-stars'
    | 'stack'
    | 'stars'
    | 'mood'
    | 'basic';

export const defaultMoodVariant = 'basic';

export const ratingVariantClass = (v: rating_variant | undefined, e: any = {}) =>
    clsxmp(v, defaultMoodVariant, ratingVariants, e);

export default ratingVariantClass;
