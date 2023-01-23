import preset from '../preset';

export type hover_animation =
    | 'none'
    | 'spin'
    | 'ping'
    | 'pulse'
    | 'bounce'
    | 'flash'
    | 'shake'
    | 'swing'
    | 'tada'
    | 'wobble'
    | 'jackInTheBox'
    | 'flipInX'
    | 'flipInY';

export const hoverAnimationClass = preset.xclasses<hover_animation>('hoverAnimation');

export default hoverAnimationClass;
