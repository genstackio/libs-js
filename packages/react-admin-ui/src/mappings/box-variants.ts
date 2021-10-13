import preset from "../preset";

export type box_variant = 'filled' | 'outlined' | 'contained' | 'none';

export const boxVariantClass = preset.xclasses<box_variant>('boxVariant');

export default boxVariantClass;
