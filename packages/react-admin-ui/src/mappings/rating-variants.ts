import preset from "../preset";

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

export const ratingVariantClass = preset.xclasses<rating_variant>('ratingVariant');

export default ratingVariantClass;
