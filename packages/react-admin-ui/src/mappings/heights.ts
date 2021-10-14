import preset from "../preset";

export type height = number | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';

export const heightClass = preset.xclasses<height>('height');

export default heightClass;
