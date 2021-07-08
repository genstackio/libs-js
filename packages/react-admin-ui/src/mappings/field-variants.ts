import clsxmp from '../utils/clsxmp';

export const fieldVariants = {
    flat: '',
    edge: 'rounded-3xl',
    raise: 'rounded shadow-field',
};

export type field_variant = 'flat' | 'edge' | 'raise';

export const defaultFieldVariant = 'flat';

export const fieldVariantClass = (v: field_variant | undefined, e: any = {}) =>
    clsxmp(`${v}`, `${defaultFieldVariant}`, fieldVariants, e);

export default fieldVariantClass;
