import clsxmp from "../utils/clsxmp";

export const corners = {
    'rounded': 'rounded-2xl',
    'top-rounded': 'rounded-t-2xl',
    'left-rounded': 'rounded-l-2xl',
    'rounded-small': 'rounded-xl',
    'top-rounded-small': 'rounded-t-xl',
    'left-rounded-small': 'rounded-l-xl',
    'rounded-xsmall': 'rounded-lg',
    'top-rounded-xsmall': 'rounded-t-lg',
    'left-rounded-xsmall': 'rounded-l-lg',
    'square': '',
};

export type corner =
      'rounded'
    | 'top-rounded'
    | 'left-rounded'
    | 'rounded-small'
    | 'top-rounded-small'
    | 'left-rounded-small'
    | 'rounded-xsmall'
    | 'top-rounded-xsmall'
    | 'left-rounded-xsmall'
    | 'square'
;

export const defaultCorner = 'square';

export const cornerClass = (v: corner|undefined, e: any = {}) => clsxmp(v, defaultCorner, corners, e);

export default cornerClass