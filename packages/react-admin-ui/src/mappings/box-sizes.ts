import clsxmp from '../utils/clsxmp';

export const boxSizes = {
    none: '',
    xs: 'w-6 h-6',
    'xs-w': 'w-6',
    'xs-h': 'h-6',
    _xs: 'max-w-6 max-h-6',
    '_xs-w': 'max-w-6',
    '_xs-h': 'max-h-6',
    sm: 'w-14 h-14',
    'sm-w': 'w-14',
    'sm-h': 'h-14',
    _sm: 'max-w-14 max-h-14',
    '_sm-w': 'max-w-14',
    '_sm-h': 'max-h-14',
    md: 'w-32 h-32',
    'md-w': 'w-32',
    'md-h': 'h-32',
    _md: 'max-w-32 max-h-32',
    '_md-w': 'max-w-32',
    '_md-h': 'max-h-32',
    lg: 'w-44 h-44',
    'lg-w': 'w-44',
    'lg-h': 'h-44',
    _lg: 'max-w-44 max-h-44',
    '_lg-w': 'max-w-44',
    '_lg-h': 'max-h-44',
    xl: 'w-80 h-80',
    'xl-w': 'w-80',
    'xl-h': 'h-80',
    _xl: 'max-w-80 max-h-80',
    '_xl-w': 'max-w-80',
    '_xl-h': 'max-h-80',
};

export const boxSizeValues = Object.keys(boxSizes);

export type box_size =
    | 'none'
    | 'xs'
    | 'xs-w'
    | 'xs-h'
    | '_xs'
    | '_xs-w'
    | '_xs-h'
    | 'sm'
    | 'sm-w'
    | 'sm-h'
    | '_sm'
    | '_sm-w'
    | '_sm-h'
    | 'md'
    | 'md-w'
    | 'md-h'
    | '_md'
    | '_md-w'
    | '_md-h'
    | 'lg'
    | 'lg-w'
    | 'lg-h'
    | '_lg'
    | '_lg-w'
    | '_lg-h'
    | 'xl'
    | 'xl-w'
    | 'xl-h'
    | '_xl'
    | '_xl-w'
    | '_xl-h';

export const defaultBoxSize = 'none';

export const boxSizeClass = (v: box_size | undefined, e: any = {}) => clsxmp(v, defaultBoxSize, boxSizes, e);

export default boxSizeClass;
