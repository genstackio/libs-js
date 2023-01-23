import preset from '../preset';

export type corner =
    | 'none'
    | 'r-sm'
    | 'rounded'
    | 'top-rounded'
    | 'left-rounded'
    | 'rounded-small'
    | 'rounded-xxsmall'
    | 'top-rounded-small'
    | 'left-rounded-small'
    | 'rounded-xsmall'
    | 'top-rounded-xsmall'
    | 'left-rounded-xsmall'
    | 'square'
    | 'circle';

export const cornerClass = preset.xclasses<corner>('corner');

export default cornerClass;
