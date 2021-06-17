import clsxmp from "../utils/clsxmp";

export const boxVariants = {
    filled: '',
    outlined: '',
    contained: '',
    none: '',
};

export type box_variant =
      'filled'
    | 'outlined'
    | 'contained'
    | 'none'
;

export const defaultBoxVariant = 'filled';

export const boxVariantClass = (v: box_variant|undefined, e: any = {}) => clsxmp(v, defaultBoxVariant, boxVariants, e);

export default boxVariantClass