import clsxmp from '../utils/clsxmp';

const bordersX = {
    default: 'border-l border-r',
    none: '',
    xs: 'border-l border-r',
    sm: 'border-l-2 border-r-2',
    md: 'border-l-3 border-r-3',
    lg: 'border-l-4 border-r-4',
    xl: 'border-l-5 border-r-5',
    sl: 'border-l-6 border-r-6',
};

const bordersY = {
    default: 'border-t border-b',
    none: '',
    xs: 'border-t border-b',
    sm: 'border-t-2 border-b-2',
    md: 'border-t-3 border-b-3',
    lg: 'border-t-4 border-b-4',
    xl: 'border-t-5 border-b-5',
    sl: 'border-t-6 border-b-6',
};

const bordersTop = {
    default: 'border-t',
    none: '',
    xs: 'border-t',
    sm: 'border-t-2',
    md: 'border-t-3',
    lg: 'border-t-4',
    xl: 'border-t-5',
    sl: 'border-t-6',
};

const bordersBottom = {
    default: 'border-b',
    none: '',
    xs: 'border-b',
    sm: 'border-b-2',
    md: 'border-b-3',
    lg: 'border-b-4',
    xl: 'border-b-5',
    sl: 'border-b-6',
};

const bordersLeft = {
    default: 'border-l',
    none: '',
    xs: 'border-l',
    sm: 'border-l-2',
    md: 'border-l-3',
    lg: 'border-l-4',
    xl: 'border-l-5',
    sl: 'border-l-6',
};

const bordersRight = {
    default: 'border-r',
    none: '',
    xs: 'border-r',
    sm: 'border-r-2',
    md: 'border-r-3',
    lg: 'border-r-4',
    xl: 'border-r-5',
    sl: 'border-r-6',
};

const borders = {
    default: 'border',
    none: '',
    xs: 'border',
    sm: 'border-2',
    md: 'border-3',
    lg: 'border-4',
    xl: 'border-5',
    sl: 'border-6',
    ...Object.entries(bordersX).reduce((acc, [k, v]) => ({ ...acc, [`${k}-x`]: v }), {} as any),
    ...Object.entries(bordersY).reduce((acc, [k, v]) => ({ ...acc, [`${k}-y`]: v }), {} as any),
    ...Object.entries(bordersTop).reduce((acc, [k, v]) => ({ ...acc, [`${k}-t`]: v }), {} as any),
    ...Object.entries(bordersBottom).reduce((acc, [k, v]) => ({ ...acc, [`${k}-b`]: v }), {} as any),
    ...Object.entries(bordersLeft).reduce((acc, [k, v]) => ({ ...acc, [`${k}-l`]: v }), {} as any),
    ...Object.entries(bordersRight).reduce((acc, [k, v]) => ({ ...acc, [`${k}-r`]: v }), {} as any),
};

export const borderValues = Object.keys(borders);
export const borderXValues = Object.keys(bordersX);
export const borderYValues = Object.keys(bordersY);
export const borderTopValues = Object.keys(bordersTop);
export const borderBottomValues = Object.keys(bordersBottom);
export const borderLeftValues = Object.keys(bordersLeft);
export const borderRightValues = Object.keys(bordersRight);

export type base_border = 'none' | 'default' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'sl';

export type border_x = base_border;
export type border_y = base_border;
export type border_top = base_border;
export type border_bottom = base_border;
export type border_left = base_border;
export type border_right = base_border;

export type border =
    | base_border
    | 'xs-l'
    | 'xs-r'
    | 'xs-t'
    | 'xs-b'
    | 'sm-l'
    | 'sm-r'
    | 'sm-t'
    | 'sm-b'
    | 'md-l'
    | 'md-r'
    | 'md-t'
    | 'md-b'
    | 'lg-l'
    | 'lg-r'
    | 'lg-t'
    | 'lg-b'
    | 'xl-l'
    | 'xl-r'
    | 'xl-t'
    | 'xl-b'
    | 'sl-l'
    | 'sl-r'
    | 'sl-t'
    | 'sl-b';

export const defaultBorder = 'none';
export const defaultBorderX = 'none';
export const defaultBorderY = 'none';
export const defaultBorderTop = 'none';
export const defaultBorderBottom = 'none';
export const defaultBorderLeft = 'none';
export const defaultBorderRight = 'none';

export const borderClass = (v: border, e: any = {}) => clsxmp(v, defaultBorder, borders, e);
export const borderXClass = (v: border_x | undefined, e: any = {}) => clsxmp(v, defaultBorderX, bordersX, e);
export const borderYClass = (v: border_y | undefined, e: any = {}) => clsxmp(v, defaultBorderY, bordersY, e);
export const borderTopClass = (v: border_top | undefined, e: any = {}) => clsxmp(v, defaultBorderTop, bordersTop, e);
export const borderBottomClass = (v: border_bottom | undefined, e: any = {}) =>
    clsxmp(v, defaultBorderBottom, bordersBottom, e);
export const borderLeftClass = (v: border_left | undefined, e: any = {}) =>
    clsxmp(v, defaultBorderLeft, bordersLeft, e);
export const borderRightClass = (v: border_right | undefined, e: any = {}) =>
    clsxmp(v, defaultBorderRight, bordersRight, e);

export default borderClass;
