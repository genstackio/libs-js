import preset from '../preset';

export type heading_text_variant =
    | 'none'
    | 'xsection'
    | 'section'
    | 'ctasection'
    | 'xxsmall'
    | 'xxsmall2'
    | 'xxsmall3'
    | 'xsmall'
    | 'small'
    | 'smmd'
    | 'smmd2'
    | 'medium'
    | 'medium2'
    | 'medium3'
    | 'large'
    | 'xlarge'
    | 'underlined';

export const headingTextVariantDescription = preset.xvalues<heading_text_variant>('headingTextVariant');

export default headingTextVariantDescription;
