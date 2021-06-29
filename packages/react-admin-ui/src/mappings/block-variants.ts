import clsxmp from '../utils/clsxmp';

export const blockVariants = {
    filled: '',
    outlined: '',
    contained: '',
    none: '',
    'header-contained': '',
};

export type block_variant = 'filled' | 'outlined' | 'contained' | 'none' | 'header-contained';

export const defaultBlockVariant = 'filled';

export const blockVariantClass = (v: block_variant | undefined, e: any = {}) =>
    clsxmp(v, defaultBlockVariant, blockVariants, e);

export default blockVariantClass;
