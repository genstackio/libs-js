import preset from '../preset';

export type width = number | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';

export const widthClass = preset.xclasses<width>('width');

export default widthClass;
