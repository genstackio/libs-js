import clsxmp from "../utils/clsxmp";

export const alignments = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
    none: '',
};

export type alignment =
      'left'
    | 'center'
    | 'right'
    | 'none'
;

export const defaultAlignment = 'none';

export const alignmentClass = (v: alignment|undefined, e: any = {}) => clsxmp(v, defaultAlignment, alignments, e);

export default alignmentClass