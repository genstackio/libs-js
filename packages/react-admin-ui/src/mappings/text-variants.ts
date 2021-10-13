import preset from "../preset";

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
    | 'sl'
    | 'title0'
    | 'title1'
    | 'title2'
    | 'title3'
    | 'title4'
    | 'title5'
    | 'title6'
    | 'title7'
    | 'underline'
;

export const textVariantClass = preset.xclasses<text_variant>('textVariant');

export default textVariantClass;
