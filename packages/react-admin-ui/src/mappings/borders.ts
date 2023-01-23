import preset from '../preset';

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

export const borderClass = preset.xclasses<border>('border');
export const borderXClass = preset.xclasses<border_x>('borderX');
export const borderYClass = preset.xclasses<border_y>('borderY');
export const borderTopClass = preset.xclasses<border_top>('borderTop');
export const borderBottomClass = preset.xclasses<border_bottom>('borderBottom');
export const borderLeftClass = preset.xclasses<border_left>('borderLeft');
export const borderRightClass = preset.xclasses<border_right>('borderRight');

export default borderClass;
