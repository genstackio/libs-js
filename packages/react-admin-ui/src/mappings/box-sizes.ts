import preset from '../preset';

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

export const boxSizeClass = preset.xclasses<box_size>('boxSize');

export default boxSizeClass;
