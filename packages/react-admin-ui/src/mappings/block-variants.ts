import preset from '../preset';

export type block_variant = 'filled' | 'outlined' | 'contained' | 'none' | 'header-contained';

export const blockVariantClass = preset.xclasses<block_variant>('blockVariant');

export default blockVariantClass;
