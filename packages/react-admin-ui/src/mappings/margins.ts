import clsxmp from '../utils/clsxmp';

export const marginsX = {
    none: '',
    default: '',
    auto: 'mx-auto',
    xs: 'mx-1',
    _xs: 'mx-0 sm:mx-1',
    sm: 'mx-2',
    _sm: 'mx-0 sm:mx-2',
    xmd: 'mx-3',
    _xmd: 'mx-0 sm:mx-3',
    md: 'mx-4',
    _md: 'mx-0 sm:mx-4',
    xlg: 'mx-5',
    _xlg: 'mx-0 sm:mx-5',
    lg: 'mx-6',
    _lg: 'mx-2 sm:mx-4 md:mx-6',
    xl: 'mx-8',
    _xl: 'mx-0 sm:mx-8',
    sl: 'mx-10',
    _sl: 'mx-0 sm:mx-10',
};

export const marginsY = {
    none: '',
    default: '',
    auto: 'my-auto',
    xs: 'my-1',
    _xs: 'my-0 sm:my-1',
    sm: 'my-2',
    _sm: 'my-0 sm:my-2',
    xmd: 'my-3',
    _xmd: 'my-0 sm:my-3',
    md: 'my-4',
    _md: 'my-0 sm:my-4',
    xlg: 'my-5',
    _xlg: 'my-0 sm:my-5',
    lg: 'my-6',
    _lg: 'my-2 sm:my-4 md:my-6',
    xl: 'my-8',
    _xl: 'my-0 sm:my-8',
    sl: 'my-10',
    _sl: 'my-0 sm:my-10',
};

export const marginsTop = {
    none: '',
    default: '',
    auto: 'mt-auto',
    xs: 'mt-1',
    _xs: 'mt-0 sm:mt-1',
    sm: 'mt-2',
    _sm: 'mt-0 sm:mt-2',
    xmd: 'mt-3',
    _xmd: 'mt-0 sm:mt-3',
    md: 'mt-4',
    _md: 'mt-0 sm:mt-4',
    xlg: 'mt-5',
    _xlg: 'mt-0 sm:mt-5',
    lg: 'mt-6',
    _lg: 'mt-2 sm:mt-4 md:mt-6',
    xl: 'mt-8',
    _xl: 'mt-0 sm:mt-8',
    sl: 'mt-10',
    _sl: 'mt-0 sm:mt-10',
};

export const marginsBottom = {
    none: '',
    default: '',
    auto: 'mb-auto',
    xs: 'mb-1',
    _xs: 'mb-0 sm:mb-1',
    sm: 'mb-2',
    _sm: 'mb-0 sm:mb-2',
    xmd: 'mb-3',
    _xmd: 'mb-0 sm:mb-3',
    md: 'mb-4',
    _md: 'mb-0 sm:mb-4',
    xlg: 'mb-5',
    _xlg: 'mb-0 sm:mb-5',
    lg: 'mb-6',
    _lg: 'mb-2 sm:mb-4 md:mb-6',
    xl: 'mb-8',
    _xl: 'mb-0 sm:mb-8',
    sl: 'mb-10',
    _sl: 'mb-0 sm:mb-10',
};

export const marginsLeft = {
    none: '',
    default: '',
    auto: 'ml-auto',
    xs: 'ml-1',
    _xs: 'ml-0 sm:ml-1',
    sm: 'ml-2',
    _sm: 'ml-0 sm:ml-2',
    xmd: 'ml-3',
    _xmd: 'ml-0 sm:ml-3',
    md: 'ml-4',
    _md: 'ml-0 sm:ml-4',
    xlg: 'ml-5',
    _xlg: 'ml-0 sm:ml-5',
    lg: 'ml-6',
    _lg: 'ml-2 sm:ml-4 md:ml-6',
    xl: 'ml-8',
    _xl: 'ml-0 sm:ml-8',
    sl: 'ml-10',
    _sl: 'ml-0 sm:ml-10',
    _3xl: 'ml-0 sm:ml-32',
};

export const marginsRight = {
    none: '',
    default: '',
    auto: 'mr-auto',
    xs: 'mr-1',
    _xs: 'mr-0 sm:mr-1',
    sm: 'mr-2',
    _sm: 'mr-0 sm:mr-2',
    xmd: 'mr-3',
    _xmd: 'mr-0 sm:mr-3',
    md: 'mr-4',
    _md: 'mr-0 sm:mr-4',
    xlg: 'mr-5',
    _xlg: 'mr-0 sm:mr-5',
    lg: 'mr-6',
    _lg: 'mr-2 sm:mr-4 md:mr-6',
    xl: 'mr-8',
    _xl: 'mr-0 sm:mr-8',
    sl: 'mr-10',
    _sl: 'mr-0 sm:mr-10',
};

export const margins = {
    none: '',
    default: '',
    auto: 'm-auto',
    xs: 'm-1',
    _xs: 'm-0 sm:m-1',
    sm: 'm-2',
    _sm: 'm-0 sm:m-2',
    xmd: 'm-3',
    _xmd: 'm-0 sm:m-3',
    md: 'm-4',
    _md: 'm-0 sm:m-4',
    xlg: 'm-5',
    _xlg: 'm-0 sm:m-5',
    lg: 'm-6',
    _lg: 'm-2 sm:m-4 md:m-6',
    xl: 'm-8',
    _xl: 'm-0 sm:m-8',
    sl: 'm-10',
    _sl: 'm-0 sm:m-10',
    ...Object.entries(marginsX).reduce((acc, [k, v]) => ({ ...acc, [`${k}-x`]: v }), {} as any),
    ...Object.entries(marginsY).reduce((acc, [k, v]) => ({ ...acc, [`${k}-y`]: v }), {} as any),
    ...Object.entries(marginsTop).reduce((acc, [k, v]) => ({ ...acc, [`${k}-t`]: v }), {} as any),
    ...Object.entries(marginsBottom).reduce((acc, [k, v]) => ({ ...acc, [`${k}-b`]: v }), {} as any),
    ...Object.entries(marginsLeft).reduce((acc, [k, v]) => ({ ...acc, [`${k}-l`]: v }), {} as any),
    ...Object.entries(marginsRight).reduce((acc, [k, v]) => ({ ...acc, [`${k}-r`]: v }), {} as any),
};

export const marginValues = Object.keys(margins);
export const marginXValues = Object.keys(marginsX);
export const marginYValues = Object.keys(marginsY);
export const marginTopValues = Object.keys(marginsTop);
export const marginBottomValues = Object.keys(marginsBottom);
export const marginLeftValues = Object.keys(marginsLeft);
export const marginRightValues = Object.keys(marginsRight);

export type base_margin =
    | 'none'
    | 'default'
    | 'auto'
    | 'xs'
    | '_xs'
    | 'sm'
    | '_sm'
    | 'xmd'
    | '_xmd'
    | 'md'
    | '_md'
    | 'xlg'
    | '_xlg'
    | 'lg'
    | '_lg'
    | 'xl'
    | '_xl'
    | 'sl'
    | '_sl'
    | '_3xl';

export type margin_x = base_margin;
export type margin_y = base_margin;
export type margin_top = base_margin;
export type margin_bottom = base_margin;
export type margin_left = base_margin;
export type margin_right = base_margin;

export type margin =
    | base_margin
    | 'default-x'
    | 'default-y'
    | 'default-t'
    | 'default-b'
    | 'default-l'
    | 'default-r'
    | 'auto-x'
    | 'auto-y'
    | 'auto-t'
    | 'auto-b'
    | 'auto-l'
    | 'auto-r'
    | 'xs-x'
    | 'xs-y'
    | 'xs-t'
    | 'xs-b'
    | 'xs-l'
    | 'xs-r'
    | '_xs-x'
    | '_xs-y'
    | '_xs-t'
    | '_xs-b'
    | '_xs-l'
    | '_xs-r'
    | 'sm-x'
    | 'sm-y'
    | 'sm-t'
    | 'sm-b'
    | 'sm-l'
    | 'sm-r'
    | '_sm-x'
    | '_sm-y'
    | '_sm-t'
    | '_sm-b'
    | '_sm-l'
    | '_sm-r'
    | 'xmd-x'
    | 'xmd-y'
    | 'xmd-t'
    | 'xmd-b'
    | 'xmd-l'
    | 'xmd-r'
    | '_xmd-x'
    | '_xmd-y'
    | '_xmd-t'
    | '_xmd-b'
    | '_xmd-l'
    | '_xmd-r'
    | 'md-x'
    | 'md-y'
    | 'md-t'
    | 'md-b'
    | 'md-l'
    | 'md-r'
    | '_md-x'
    | '_md-y'
    | '_md-t'
    | '_md-b'
    | '_md-l'
    | '_md-r'
    | 'xlg-x'
    | 'xlg-y'
    | 'xlg-t'
    | 'xlg-b'
    | 'xlg-l'
    | 'xlg-r'
    | '_xlg-x'
    | '_xlg-y'
    | '_xlg-t'
    | '_xlg-b'
    | '_xlg-l'
    | '_xlg-r'
    | 'lg-x'
    | 'lg-y'
    | 'lg-t'
    | 'lg-b'
    | 'lg-l'
    | 'lg-r'
    | '_lg-x'
    | '_lg-y'
    | '_lg-t'
    | '_lg-b'
    | '_lg-l'
    | '_lg-r'
    | 'xl-x'
    | 'xl-y'
    | 'xl-t'
    | 'xl-b'
    | 'xl-l'
    | 'xl-r'
    | '_xl-x'
    | '_xl-y'
    | '_xl-t'
    | '_xl-b'
    | '_xl-l'
    | '_xl-r'
    | 'sl-x'
    | 'sl-y'
    | 'sl-t'
    | 'sl-b'
    | 'sl-l'
    | 'sl-r'
    | '_sl-x'
    | '_sl-y'
    | '_sl-t'
    | '_sl-b'
    | '_sl-l'
    | '_sl-r';

export const defaultMargin = 'none';
export const defaultMarginX = 'none';
export const defaultMarginY = 'none';
export const defaultMarginTop = 'none';
export const defaultMarginBottom = 'none';
export const defaultMarginLeft = 'none';
export const defaultMarginRight = 'none';

export const marginClass = (v: margin | undefined, e: any = {}) => clsxmp(v, defaultMargin, margins, e);
export const marginXClass = (v: margin_x | undefined, e: any = {}) => clsxmp(v, defaultMarginX, marginsX, e);
export const marginYClass = (v: margin_y | undefined, e: any = {}) => clsxmp(v, defaultMarginY, marginsY, e);
export const marginTopClass = (v: margin_top | undefined, e: any = {}) => clsxmp(v, defaultMarginTop, marginsTop, e);
export const marginBottomClass = (v: margin_bottom | undefined, e: any = {}) =>
    clsxmp(v, defaultMarginBottom, marginsBottom, e);
export const marginLeftClass = (v: margin_left | undefined, e: any = {}) =>
    clsxmp(v, defaultMarginLeft, marginsLeft, e);
export const marginRightClass = (v: margin_right | undefined, e: any = {}) =>
    clsxmp(v, defaultMarginRight, marginsRight, e);

export default marginClass;
