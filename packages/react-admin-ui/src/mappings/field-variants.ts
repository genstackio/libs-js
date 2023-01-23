import preset from '../preset';

export type field_variant = 'flat' | 'edge' | 'raise';

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
            return preset.classes('fieldPrependedVariant', variant, e);
        case 'input':
            return preset.classes('fieldInputVariant', `${variant}_${prepend ? 'p' : ''}${append ? 'a' : ''}`, e);
        case 'appended':
            return preset.classes('fieldAppendedVariant', variant, e);
        default:
        case 'container':
            return preset.classes('fieldVariant', variant, e);
    }
};

export default fieldVariantClass;
