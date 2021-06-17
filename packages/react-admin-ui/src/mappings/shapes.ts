import clsxmp from "../utils/clsxmp";

export const shapes = {
    'circular': 'rounded-full',
    'rounded': 'rounded-lg',
    'square': '',
};

export type shape =
      'circular'
    | 'rounded'
    | 'square'
;

export const defaultShape = 'square';

export const shapeClass = (v: shape|undefined, e: any = {}) => clsxmp(v, defaultShape, shapes, e);

export default shapeClass