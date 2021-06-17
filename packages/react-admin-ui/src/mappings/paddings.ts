import clsxmp from "../utils/clsxmp";

export const paddings = {
    none: '',
    default: 'p-10',
    small: 'x-p-small',
};

export type padding =
      'none'
    | 'default'
    | 'small'
;

export const defaultPadding = 'none';

export const paddingClass = (v: padding|undefined, e: any = {}) => clsxmp(v, defaultPadding, paddings, e);

export default paddingClass