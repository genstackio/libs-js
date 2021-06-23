import clsxmp from '../utils/clsxmp';

export const progressVariants = {
    circular: '',
    linear: '',
    default: '',
};

export type progress_variant = 'circular' | 'linear' | 'default';

export const defaultProgressVariant = 'default';

export const progressVariantClass = (v: progress_variant | undefined, e: any = {}) =>
    clsxmp(v, defaultProgressVariant, progressVariants, e);

export default progressVariantClass;
