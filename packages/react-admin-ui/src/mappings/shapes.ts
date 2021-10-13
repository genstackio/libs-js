import preset from "../preset";

export type shape = 'circular' | 'rounded' | 'square';

export const shapeClass = preset.xclasses<shape>('shape');

export default shapeClass;
