import preset from '../preset';

export type alignment = 'left' | 'center' | 'right' | 'none';

export const alignmentClass = preset.xclasses<alignment>('alignment');

export default alignmentClass;
