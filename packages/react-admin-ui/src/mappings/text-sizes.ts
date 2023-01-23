import preset from '../preset';

export type text_size =
    | 'xs'
    | 'sm'
    | 'md'
    | 'base'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl'
    | '7xl'
    | '8xl'
    | '9xl';

export const textSizeClass = preset.xclasses<text_size>('textSize');

export default textSizeClass;
