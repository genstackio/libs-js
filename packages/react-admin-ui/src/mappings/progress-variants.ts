import preset from "../preset";

export type progress_variant = 'circular' | 'linear' | 'default';

export const progressVariantClass = preset.xclasses<progress_variant>('progressVariant');

export default progressVariantClass;
