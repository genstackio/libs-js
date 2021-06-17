import clsxmp from "../utils/clsxmp";

export const spinnerVariants = {
    'dots': 'h-3 w-3 bg-danger rounded-full',
    'dotted-circle': 'border-4 border-primary border-dotted',
    'full-circle': 'border border-t-4 border-warning',
    'half-circle': 'border-t-2 border-r-2 border-secondary',
    'separate-circle': 'border-t-2 border-b-2 border-dark',
    'squares': 'h-4 w-1 bg-info',
};

export type spinner_variant =
      'dots'
    | 'dotted-circle'
    | 'full-circle'
    | 'half-circle'
    | 'separate-circle'
    | 'squares'
;

export const defaultSpinnerVariant = 'squares';

export const spinnerVariantClass = (v: spinner_variant|undefined, e: any = {}) => clsxmp(v, defaultSpinnerVariant, spinnerVariants, e);

export default spinnerVariantClass