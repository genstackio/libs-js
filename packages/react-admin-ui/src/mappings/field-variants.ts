import clsxmp from '../utils/clsxmp';

export const fieldVariants = {
    flat: '',
    edge: 'rounded-3xl',
    raise: 'rounded shadow-field',
};

export const fieldVariantValues = Object.keys(fieldVariants);

export const fieldPrependedVariants = {
    flat: '',
    edge: 'rounded-l-3xl',
    raise: '',
};

export const fieldPrependedVariantValues = Object.keys(fieldPrependedVariants);

export const fieldAppendedVariants = {
    flat: '',
    edge: 'rounded-r-3xl',
    raise: '',
};

export const fieldAppendedVariantValues = Object.keys(fieldAppendedVariants);

export const fieldInputVariants = {
    edge_: 'rounded-3xl',
    edge_p: 'rounded-r-3xl',
    edge_a: 'rounded-l-3xl',
    raise_: 'rounded',
    raise_p: 'rounded-r',
    raise_a: 'rounded-l',
};

export const fieldInputVariantValues = Object.keys(fieldInputVariants);

export type field_variant = 'flat' | 'edge' | 'raise';

export const defaultFieldVariant = 'flat';

export const fieldVariantClass = (
    {
        variant,
        prepend = false,
        append = false,
        type = 'container',
    }: {
        variant?: field_variant;
        prepend?: boolean;
        append?: boolean;
        type?: 'container' | 'input' | 'prepended' | 'appended';
    },
    e: any = {},
) => {
    switch (type || '') {
        case 'prepended':
            return clsxmp(`${variant}`, `${defaultFieldVariant}`, fieldPrependedVariants, e);
        case 'input':
            return clsxmp(
                `${variant}_${prepend ? 'p' : ''}${append ? 'a' : ''}`,
                `${defaultFieldVariant}_pa`,
                fieldInputVariants,
                e,
            );
        case 'appended':
            return clsxmp(`${variant}`, `${defaultFieldVariant}`, fieldAppendedVariants, e);
        default:
        case 'container':
            return clsxmp(`${variant}`, `${defaultFieldVariant}`, fieldVariants, e);
    }
};

export default fieldVariantClass;
