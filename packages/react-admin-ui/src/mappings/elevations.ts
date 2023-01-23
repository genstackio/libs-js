import preset from '../preset';

export type elevation = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export const elevationClass = preset.xclasses<elevation>('elevation');

export default elevationClass;
