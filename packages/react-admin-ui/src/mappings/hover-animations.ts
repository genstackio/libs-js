import clsxmp from '../utils/clsxmp';

export const hoverAnimations = {
    none: '',
    spin: 'hover:animate-spin',
    ping: 'hover:animate-ping',
    pulse: 'hover;animated hover:pulsing',
    bounce: 'hover:animate-bounce',
    flash: 'hover:animate-pulse',
    tada: 'animated tada',
    shake: 'animated shake',
    wobble: 'animated wobble',
    jackInTheBox: 'animated jackInTheBox',
    flipInX: 'animated flipInX',
    flipInY: 'animated flipInY',
};

export const hoverAnimationValues = Object.keys(hoverAnimations);

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

export const defaultHoverAnimation = 'none';

export const hoverAnimationClass = (v: hover_animation | undefined, e: any = {}) =>
    clsxmp(`${v}`, `${defaultHoverAnimation}`, hoverAnimations, e);

export default hoverAnimationClass;
